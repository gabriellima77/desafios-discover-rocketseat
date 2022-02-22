const profileKeys = [
  'avatar_url',
  'bio',
  'company',
  'email',
  'location',
  'login',
  'name',
  'repos_url',
  'twitter_username',
  'html_url',
];

const filterProfileContent = (profileData) => {
  const filteredContent = {};
  profileKeys.forEach((key) => {
    const value = profileData[key];
    if (value) filteredContent[key] = value;
  });
  return filteredContent;
};

const getProfileContent = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`, {
    mode: 'cors',
  });
  const data = await response.json();
  return filterProfileContent(data);
};

const putProfileContent = async (profileContent) => {
  const profileImage = document.querySelector('.profile-img');
  const profileName = document.querySelector('.profile-name');

  profileImage.setAttribute('src', profileContent.avatar_url);
  profileName.textContent = profileContent.name;
  if (profileContent.bio) {
    const bio = document.querySelector('.bio');
    bio.textContent = profileContent.bio;
  }
};

const Profile = {
  getProfileContent,
  putProfileContent,
};

export default Profile;
