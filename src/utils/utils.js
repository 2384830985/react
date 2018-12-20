export default {
    formateDate(time){ // 时间戳转化时间
        if(!time) return '';
        function supplementZero(dataTime){ //补零
            if (dataTime<10){
                return '0' + dataTime
            }
            return dataTime
        }
        let data     = new Date(time)
        let dataTime = data.getFullYear() + '-'+  //年
        supplementZero(data.getMonth()+1) + '-'+ //月
        supplementZero(data.getDate()) + ' '+ // 日
        supplementZero(data.getHours()) + ':'+ // 时
        supplementZero(data.getMinutes()) + ':'+// 分
        supplementZero(data.getSeconds())// 秒
        return dataTime
    },
    pagination(data,callback){
        return {
            onChange: ()=>{
                callback()
            },

        };
    }
}