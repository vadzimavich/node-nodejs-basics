const parseEnv = () => {
  const envVars = process.env;
  const rssEnvVars = Object.entries(envVars)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key.trim()}=${value.trim()}`);

  console.log(rssEnvVars.join('; '));
};

parseEnv();
