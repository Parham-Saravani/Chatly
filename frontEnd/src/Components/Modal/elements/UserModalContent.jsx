function UserModalContent({
  name,
  avatar,
  username,
  isGroup,
  isOnline,
  bio,
  membersCount,
}) {
  return (
    <div>
      {/* Profile header */}
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt={name}
          className="h-24 w-24 rounded-full object-cover"
        />

        <h2 className="mt-3 text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
          {name}
        </h2>

        <p
          className={`mt-1 text-sm ${isOnline ? "dark:text-dark-hover-accent text-light-hover-accent" : "text-light-text-secondary dark:text-dark-text-secondary"}`}
        >
          {isGroup
            ? `${membersCount} subscribers`
            : isOnline
              ? "online"
              : "last seen recently"}
        </p>
      </div>

      {/* Profile details */}
      <div className="mt-6 space-y-5 px-6 py-3 rounded-xl">
        {username && (
          <div className="flex items-start gap-4">
            <div className="min-w-0">
              <p className="mb-1 text-xs text-light-text-mute dark:text-dark-text-mute">
                {isGroup ? "Public link" : "Username"}
              </p>
              <p className="break-all text-sm text-light-text-primary dark:text-dark-text-primary">
                @{username}
              </p>
            </div>
          </div>
        )}

        {bio && (
          <div className="flex items-start gap-4">
            <div className="min-w-0">
              <p className="mb-1 text-xs text-light-text-mute dark:text-dark-text-mute">
                Bio
              </p>
              <p className="whitespace-pre-wrap text-sm leading-6 text-light-text-primary dark:text-dark-text-primary">
                {bio}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserModalContent;
