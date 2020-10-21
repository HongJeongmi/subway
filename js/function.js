$(function() {
	// 메뉴영역
	const $gnb = $('#gnb')
	const $bg = $('.lnb_bg')
	const $lnb = $('#gnb>li>.lnb')

	$('html, body').stop().animate({ scrollTop: 0 })

	$gnb.on({
		mouseenter: function() {
			$bg.slideDown(200)
			$lnb.slideDown(200)
		},

		mouseleave: function() {
			$lnb.stop().slideUp(200)
			$bg.stop().slideUp(200)
		}
	})

	//서브메뉴 배경판 영역 이벤트 등록
	$bg.on({
		mouseenter: function() {
			$lnb.stop().slideDown()
			$(this).stop().slideDown()
		},

		mouseleave: function() {
			$lnb.stop().slideUp()
			$(this).stop().slideUp()
		}
	})

	// 비주얼영역 슬라이드
	const $slides = $('#slides>.slides-container')
	const $indicator = $('#slides>.slides-indicator>li>a')
	let nowIdx = 0

	$indicator.on('click', function(evt) {
		nowIdx = $indicator.index(this)

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$slides.stop().animate({ left: -100 * nowIdx + '%' })

		evt.preventDefault()
	})

	// 비주얼영역 자동재생

	setInterval(function() {
		if (nowIdx < 2) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$slides.stop().animate({ left: -100 * nowIdx + '%' })
	}, 3000)
})

// 메뉴영역
$(function() {
	const $m_indi = $('#mnu-slides > .mnu-indicator > li > a ')
	const $m_slides = $('#mnu-container')
	const $prev = $('#menu > .m_box > .prev')
	const $next = $('#menu > .m_box > .next')
	let nowIdx = 0

	$m_indi.on('click', function(evt) {
		nowIdx = $m_indi.index(this)
		$(this).parent().addClass('on').siblings().removeClass('on')
		$m_slides.stop().animate({ left: -1200 * nowIdx })
		evt.preventDefault()
	})

	// 이전
	$prev.on('click', function(evt) {
		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 3
		}
		$m_indi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$m_slides.stop().animate({ left: -1200 * nowIdx })
		evt.preventDefault()
	})

	// 다음
	$next.on('click', function(evt) {
		if (nowIdx < 3) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$m_indi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$m_slides.stop().animate({ left: -1200 * nowIdx })
		evt.preventDefault()
	})
})

$(function() {
	// enjoy영역 슬라이드
	const $e_cont = $('#enjoy .container-box')
	const $e_indi = $('#enjoy .indicator>li>a')

	$e_indi.on('click', function(evt) {
		nowIdx = $e_indi.index(this)
		$(this).parent().addClass('on').siblings().removeClass('on')

		$e_cont.stop().animate({ left: -270 * nowIdx })

		evt.preventDefault()
	})
})
