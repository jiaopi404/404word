// 这是测试接口的js文件
$(function () {
    //mui.toast('hello')
    let data = {}
    let method = ''
    let url = ''
    $('#submit').on('tap', function () {
        method = $('.mui-selected a').html().trim()
        url = $('#port').val().trim()

        // 将键值对里的信息提取出来
        let keys = []
        let values = []
        
        $('.key').each((index, obj) => {
            keys.push($(obj).val().trim())
        })
        $('.value').each((index, obj) => {
            values.push($(obj).val().trim())
        })
        
        // 组成data对象
        for (let i = 0; i < keys.length; i++) {
            data[keys[i]] = values[i]
        }

        $.ajax({
            type: method,
            url: url,
            data: data,
            success: function (res) {
               console.log(res)
            }
        });
    })

    $('.mui-icon-plus').on('tap', function () {
        let str = `
            <li class="item mui-table-view-cell">
                <input class="key" type="text" placeholder="键">
                <span>=</span>
                <input class="value" type="text" placeholder="值">
            </li>
        `
        $(str.trim()).appendTo('#items')
    })


})