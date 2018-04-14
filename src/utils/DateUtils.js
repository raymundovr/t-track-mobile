export default class DateUtils {

    static getMonthName = (month, applyFunction=null) => {
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      if (month < 0 && month > 11)
        return 'Not a month';
      
      if(applyFunction !== null) {                
          return applyFunction(months[month]);
      }

      return months[month];
    }
}