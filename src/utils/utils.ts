
export const emailValidator= (email:string) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Por favor digite seu e-mail';
    if (!re.test(email)) return 'Esse endereço de email não é válido';
  
    return '';
};

export const isEmpty = (item:string)=>{
  if (!item || item.length <= 0) return 'O campo não pode estar vazio';

  return '';
}


export function FormattedData(){
  let date = new Date(),
      day = date.getDate().toString(),
      formatedDay = (day.length == 1)? '0'+day:day,
      month =(date.getMonth()+1).toString(),
      formatedMonth = (month.length == 1)? '0'+month:month,
      formatedYear = date.getFullYear();

      return `${formatedDay}/${formatedMonth}/${formatedYear}`

}