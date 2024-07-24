export const generateTemporaryId = () => {
    return 'temp-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  };
  