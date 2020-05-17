const contactsInitState = {
  contacts: [
    {
      link: "",
      platform: "",
    },
    {
      link: "",
      platform: "",
    },
    {
      link: "",
      platform: "",
    },
    {
      link: "",
      platform: "",
    },
    {
      link: "",
      platform: "",
    },
  ],
};

const BasicInfoInitState = {
  first_name: "",
  last_name: "",
  username: "",
  bio: "",
  password: "",
  collections: [{}],
  interests: [],
  email: "",
  location: "",
  avatar: "",
  _id: "",
};

const userInitState = {
  ...BasicInfoInitState,
  ...contactsInitState,
  profile: {
    ...BasicInfoInitState,
    ...contactsInitState,
  },
};

export { userInitState };
