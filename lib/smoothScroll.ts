export const smoothScrollTo = (id: string): void => {
  const scrollSection = document.getElementById(id);

  const header = document.querySelector('header');
  const offset = header ? header.clientHeight : 70;
  const targetPosition = scrollSection!.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};
