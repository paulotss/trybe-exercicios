const validate = new JustValidate('#trybe');

validate
  .addField('#name-id',[
    {
      rule: 'minLength',
      value: 5,
      errorMessage: 'teste'
    },
    {
      rule: 'maxLength',
      value: 45
    }
  ]);

document.getElementById('date-id').DatePickerX.init();