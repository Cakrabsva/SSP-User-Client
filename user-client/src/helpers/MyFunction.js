'use strict'

class MyDate {
    static formateDate (date) {
        return date.toLocaleString("sv-SE").split(' ')[0] //  yyyy/mm/dd
    }

    static transformDate(date) {
        return date.replace(/-/g,'') //use for calculate days
    }

    static formatRupiah (data) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(data);
    }

    static formatDate (date) {
        return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }
}

export default MyDate