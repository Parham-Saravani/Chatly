import { useContext, useId, useState } from "react";
import AuthLayout from "./AuthLayout";
import DetailHeader from "./elements/DeailHeader";
import { FiUpload } from "react-icons/fi";
import { FaRegTrashCan, FaRegUser } from "react-icons/fa6";
import { FaAt, FaAlignLeft } from "react-icons/fa";
import AuthButton from "./AuthBtutton";
import { baseUrl } from "../../utilities/constants";
import toast from "react-hot-toast";
import uploadImage from "../../utilities/uploadImage";
import updateUserData from "../../utilities/updateUserData";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { setCookie } from "../../utilities/cookie";

const errors = {
  ID_TAKEN: "This username is already taken.",
  ID_MUST_BE_AT_LEAST_THREE_CHARACTERS:
    "Username must be at least 3 characters long.",
  ID_MUST_BE_STRING: "Username must be a string.",
  INVALID_ID:
    "Username can only contain English letters, numbers, and hyphens.",
  INTERNAL_SERVER_ERROR: "Something went wrong. Please try again later.",
};

function UserDetailLayout({ email }) {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const id = useId();
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const submitUserProfileData = async () => {
    try {
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadImage(image, username);
      }
      if (!imageUrl) {
        toast.error(
          "Network error. Please check your internet connection and try again.",
        );
        return;
      }
      if (imageUrl) {
        const options = {
          name,
          email,
          username,
          ...(imageUrl && { imageUrl }),
          ...(bio && { bio }),
        };
        const registerResponse = await fetch(`${baseUrl}/api/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(options),
        });
        if (!registerResponse.ok) {
          toast.error("Your account could not be created. Please try again.");
          return;
        }
        const { message, userData, token } = await registerResponse.json();
        if (message === "Your account has been created successfully.") {
          setCookie("auth-token", token, true);
          toast.success("Your account has been created successfully.");
          dispatch({
            type: "LOGIN_IN",
            data: {
              name: userData.name,
              id: userData.id,
              email: userData.email,
              imageUrl: userData.imageUrl,
              bio: userData.bio,
            },
          });
          navigate("/", { replace: true });
          return;
        }
        toast.error(message);
        return;
      }

      toast.error("Your account could not be created. Please try again.");
    } catch (error) {
      toast.error(
        "Network error. Please check your internet connection and try again.",
      );
    }
  };

  return (
    <>
      <title>Complete Profile | Chatly</title>
      <AuthLayout card={true} header={DetailHeader}>
        <form
          action={submitUserProfileData}
          className="flex w-full flex-col items-center"
        >
          <div className="w-full">
            <div className="flex text-sm  flex-wrap items-center justify-between gap-5">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="size-30 rounded-full object-cover"
                />
              ) : (
                <div className="flex size-30 items-center justify-center rounded-full dark:bg-dark-bg-secondary bg-light-bg-secondary border dark:border-dark-border-primary border-light-border-primary">
                  <FaRegUser
                    size={40}
                    className="dark:text-dark-text-secondary text-light-text-secondary"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor={id + "profile-image"}
                  className="block w-38 text-dark-text-primary cursor-pointer rounded-xl px-2 py-3 transition-colors duration-300 dark:bg-dark-primary-accent bg-light-primary-accent dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent"
                >
                  <p className="flex items-center justify-center gap-2">
                    <FiUpload size={17} />
                    Upload photo
                  </p>
                  <input
                    onChange={(event) => {
                      const value = event.target.files[0];
                      setImagePreview(URL.createObjectURL(value));
                      setImage(value);
                    }}
                    id={id + "profile-image"}
                    hidden
                    type="file"
                    accept="image/*"
                  />
                </label>

                <button
                  onClick={() => {
                    setImagePreview(null);
                    setImage("");
                  }}
                  type="button"
                  className="mt-2 flex w-full cursor-pointer dark:hover:bg-dark-bg-secondary/70 hover:bg-light-bg-secondary/70 items-center justify-center gap-2 rounded-xl border px-2 py-3 transition-colors duration-300 dark:bg-dark-bg-secondary dark:border-dark-border-primary border-light-border-primary"
                >
                  <FaRegTrashCan size={17} />
                  Remove
                </button>
              </div>
            </div>

            <div className="my-6 space-y-3">
              <div className="space-y-2">
                <label
                  htmlFor={id + "full-name"}
                  className="block text-sm font-medium dark:text-dark-text-secondary text-light-text-secondary"
                >
                  Full name
                </label>

                <div className="relative flex  items-center rounded-xl border dark:bg-dark-bg-secondary bg-light-bg-secondary dark:border-dark-border-primary border-light-border-primary transition-colors duration-300 focus-within:border-light-primary-accent dark:focus-within:border-dark-primary-accent">
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id={id + "full-name"}
                    type="text"
                    placeholder="Your name"
                    className="flex-1 rounded-xl bg-transparent py-3.5 pl-12 pr-5 text-sm dark:text-dark-text-primary text-light-text-primary outline-none placeholder:text-text-mute"
                  />
                  <FaRegUser
                    size={22}
                    className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-dark-text-secondary text-light-text-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={id + "username"}
                  className="block text-sm font-medium dark:text-dark-text-secondary text-light-text-secondary"
                >
                  Username
                </label>

                <div className="relative flex items-center rounded-xl border dark:bg-dark-bg-secondary bg-light-bg-secondary dark:border-dark-border-primary border-light-border-primary transition-colors duration-300 focus-within:border-light-primary-accent dark:focus-within:border-dark-primary-accent">
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    id={id + "username"}
                    type="text"
                    placeholder="username"
                    className="flex-1 rounded-xl bg-transparent py-3.5 pl-12 pr-5 text-sm  outline-none placeholder:text-text-mute"
                  />
                  <FaAt
                    size={22}
                    className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-dark-text-secondary text-light-text-secondary"
                  />
                </div>
                {username && (
                  <p className="text-sm text-red-600">
                    {!/^[a-zA-Z0-9-]+$/.test(username)
                      ? "Username can only contain English letters, numbers, and hyphens."
                      : username.length < 3
                        ? "Username must be at least 3 characters long."
                        : null}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={id + "bio"}
                  className="block text-sm font-medium dark:text-dark-text-secondary text-light-text-secondary"
                >
                  Bio
                  <span className="ml-1.5 dark:text-dark-text-mute text-light-text-mute text-xs">
                    (Optional)
                  </span>
                </label>

                <div className="relative rounded-xl border dark:bg-dark-bg-secondary bg-light-bg-secondary dark:border-dark-border-primary border-light-border-primary transition-colors duration-300 focus-within:border-light-primary-accent dark:focus-within:border-dark-primary-accent">
                  <textarea
                    id={id + "bio"}
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                    rows={3}
                    maxLength={150}
                    placeholder="Tell us a little about yourself..."
                    className="w-full resize-none rounded-xl bg-transparent py-4 pl-12 pr-5 pb-10 text-sm dark:text-dark-text-primary text-light-text-primary outline-none placeholder:text-text-mute"
                  />
                  <FaAlignLeft
                    size={22}
                    className="absolute left-3 top-5 dark:text-dark-text-secondary text-light-text-secondary"
                  />
                  <p className="absolute bottom-3 right-4 text-sm text-text-secondary">
                    {bio.length} / 150
                  </p>
                </div>
              </div>
            </div>
          </div>

          <AuthButton condition={Boolean(name && username)}>
            Complete profile
          </AuthButton>
        </form>
      </AuthLayout>
    </>
  );
  ``;
}

export default UserDetailLayout;
