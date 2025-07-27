'use strict'

class MyDate {
    static formateDate (date) {
        return date.toLocaleString("sv-SE").split(' ')[0] //  yyyy/mm/dd
    }

    static transformDate(date) {
        return date.replace(/-/g,'') //use for calculate days
    }
}

export default MyDate