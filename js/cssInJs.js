// const allSectionSowOff = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// for (const section of sections) {
//   console.log(section);
//   section.style.backgroundColor = 'lightblue';
//   section.style.border = '2px solid green';
//   section.style.marginBottom = '18px';
//   section.style.borderRadius='10px';
//   section.style.padding='15px';
// }
dynamic class (classList = DOMTokenList object)
for (const section of sections) {
  section.classList.add('section-card');
}
