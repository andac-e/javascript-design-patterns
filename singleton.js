const singleton = () => {
  let instance;

  const createInstance = () => {
    let object = new Object("Instance created.");
    return object;
  };

  return {
    getInstance: () => {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
};

const exec = () => {
  let firstInstance = singleton.getInstance();
  let secondInstance = singleton.getInstance();

  alert(firstInstance === secondInstance);
};
