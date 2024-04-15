export function phoneValidation(value) 
{
  const regex = /^[7-9][0-9]{9}$/;
  return regex.test(value)
}