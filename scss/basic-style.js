// tooltips位置相关

$(document).off('mouseover', '.ju-tooltips').on('mouseover', '.ju-tooltips ', function () {
    var that = $(this)
    if (that.hasClass('is-hover')) {
        return
    }
    that.addClass('is-hover')
    var body = $(that.children('.ju-tooltips-body'))
    var sibling_link = $(body.siblings('.ju-tooltips-entry'))
    //左边宽度是否可容纳弹出层
    var body_set_left = sibling_link.offset().left > body.outerWidth()
    var body_set_bottom = sibling_link.offset().top > body.outerHeight()
    console.log(that.hasClass('ju-tooltips-top'), body_set_left, body_set_bottom)
    if (that.hasClass('ju-tooltips-top')) {
        body.css('top', sibling_link.offset().top - body.outerHeight() - 12 + 'px')
        console.log(sibling_link.offset().left - body.outerWidth() + sibling_link.outerWidth())
        body.css('right', window.innerWidth - sibling_link.offset().left - sibling_link.outerWidth() - sibling_link.outerWidth() / 2 + 'px')
    } else {
        var body_left = (window.innerWidth - sibling_link.offset().left) / 2
        var body_top = (sibling_link.offset().top + sibling_link.outerHeight() + 2)
        body.css('right', body_left + 'px')
        body.css('top', body_top + 'px')
    }
})
$(document).off('mouseout', '.ju-tooltips').on('mouseout', '.ju-tooltips', function () {
    var that = $(this)
    console.log(that.hasClass('is-hover'))
    if (that.hasClass('is-hover')) {
        that.removeClass('is-hover')
    }
})
