const printToDom = (selector, text) => {
  $(selector).html(text);
};

const goHome = () => {
  window.location.reload();
};

export default { printToDom, goHome };
