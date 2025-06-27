
const backgroundTailwindClass = `
  flex-1
  bg-background  
`;

const containerTailwindClass = `
  flex-1
  items-center
  justify-center
`;

const logoTailwindClass = `mb-logo`;

const areaInputTailwindClass = `
  flex-col 
  w-90%`;

const inputTailwindClass = `
  bg-white
  p-2.5
  mb-3.5
  text-17px
  rounded-lg
  text-gray-900
`;

const submitButtonTailwindClass = `
  w-90%
  h-11
  rounded-lg
  bg-submitButton
  mt-2.5
  items-center
  justify-center
`;

const submitTextTailwindClass = `
  text-20px
  text-white
`;

const linkTailwindClass = `
  mt-2.5
  mb-2.5
`;

const linkTextTailwindClass = `
  text-linkText
`;

export default {
  background: backgroundTailwindClass,
  container: containerTailwindClass,
  logo: logoTailwindClass,
  areaInput: areaInputTailwindClass,
  input: inputTailwindClass,
  submitButton: submitButtonTailwindClass,
  submitText: submitTextTailwindClass,
  link: linkTailwindClass,
  linkText: linkTextTailwindClass,
}