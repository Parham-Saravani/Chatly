import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import useAuth from "../../../Store/AuthStore";

const onChangeHandler = (event, setState) => {
  setState(event.target.value);
};

function EditProfile({ onClose }) {
  const userData = useAuth((state) => state.userData);
  const [userName, setUserName] = useState(userData.name);
  const [userID, setUserID] = useState(userData.id);
  const [userBio, setUserBio] = useState("");
  const [imagePreview, setImagePreview] = useState(userData.imageUrl);

  const inputs = [
    {
      state: setUserName,
      value: userName,
      label: "Name",
      type: "input",
      placeholder: "Enter your name",
    },
    {
      state: setUserID,
      value: userID,
      label: "Username",
      type: "input",
      placeholder: "Enter your username",
    },
    {
      state: setUserBio,
      value: userBio,
      label: "Bio",
      type: "textarea",
      placeholder: "Write something about yourself...",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 p-5 max-sm:px-1 max-sm:py-2">
      <div className="group relative cursor-pointer size-24">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile"
            className="object-cover rounded-full"
          />
        ) : (
          <div className="dark:bg-dark-primary-accent flex justify-center items-center text-5xl rounded-full w-full h-full">
            {userName[0]}
          </div>
        )}

        <label
          htmlFor="edit-profile-image-input"
          className="cursor-pointer absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition group-hover:opacity-100"
        >
          <input
            accept="image/*"
            onChange={(event) => {
              const test = URL.createObjectURL(event.target.files[0]);
              setImagePreview(test);
            }}
            id="edit-profile-image-input"
            type="file"
            hidden
          />
          <FiCamera size={24} className="text-white" />
        </label>
      </div>

      <div className="w-full space-y-4">
        {/* Name */}
        {inputs.map((item) => {
          return item.type === "input" ? (
            <div key={item.label}>
              <label className="text-sm text-dark-text-secondary">
                {item.label}
              </label>
              <input
                type="text"
                name="name"
                placeholder={item.placeholder}
                onInput={(event) => item.state(event.target.value)}
                value={item.value}
                className="placeholder:text-sm max-xl:placeholder:text-[13px] w-full mt-1 rounded-lg border dark:border-dark-border-primary/50 dark:bg-dark-bg-primary/70 bg-light-bg-primary border-light-border-primary bg-light-primary px-3 py-2.5 outline-none transition focus:border-dark-primary-accent"
              />
            </div>
          ) : (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <label className="text-sm text-dark-text-secondary">Bio</label>

                <span className="text-xs text-dark-text-mute">0/150</span>
              </div>

              <textarea
                key={item.name}
                name="bio"
                rows={3}
                onInput={(event) => onChangeHandler(event, item.state)}
                value={item.value}
                maxLength={150}
                placeholder={item.placeholder}
                className="placeholder:text-sm max-xl:placeholder:text-[13px] w-full mt-1 resize-none rounded-lg border dark:bg-dark-bg-primary/70 dark:border-dark-border-primary/50 bg-light-bg-primary border-light-border-primary border-dark-border-primary bg-dark-bg-primary px-3 py-2.5 outline-none transition focus:border-dark-primary-accent"
              />
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-end gap-3">
        <button
          onClick={onClose}
          type="button"
          className="rounded-lg px-4 py-2 text-sm text-dark-text-secondary transition-colors duration-300 dark:hover:bg-red-600/10 hover:bg-red-600/30 hover:text-red-600 cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-dark-primary-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-dark-hover-accent cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default EditProfile;
