


    


    var domain = 'localhost';
    if (domain == '')
        domain = window.location.hostname;

    


    (function () {

        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-69647670-1', 'auto', { 'name': 'as25n45' });
        var dimensionValue = 'proxynetflix';
        ga('as25n45.set', 'dimension1', dimensionValue);
        ga('as25n45.send', 'pageview');

    })();

    


    (function () {
        var base = "//www.twitbridge.com/ads/";
        var a728x90 = document.createElement('IFRAME');
        a728x90.setAttribute("src", base + "728x90x3.cshtml");
        a728x90.setAttribute("style", "width:728px;height:90px;border:none;overflow:hidden");
        a728x90.setAttribute("bok", "");

        var a120x600 = document.createElement('IFRAME');
        a120x600.setAttribute("src", base + "120x600.cshtml");
        a120x600.setAttribute("style", "width:120px;height:600px;border:none;overflow:hidden");
        a120x600.setAttribute("bok", "");

        var a160x600 = document.createElement('IFRAME');
        a160x600.setAttribute("src", base + "160x600.cshtml");
        a160x600.setAttribute("style", "width:160px;height:600px;border:none;overflow:hidden");
        a160x600.setAttribute("bok", "");

        var a300x250 = document.createElement('IFRAME');
        a300x250.setAttribute("src", base + "300x250x2.cshtml");
        a300x250.setAttribute("style", "width:300px;height:250px;border:none;overflow:hidden");
        a300x250.setAttribute("bok", "");

        var a336x280 = document.createElement('IFRAME');
        a336x280.setAttribute("src", base + "336x280.cshtml");
        a336x280.setAttribute("style", "width:336px;height:280px;border:none;overflow:hidden");
        a336x280.setAttribute("bok", "");


        var adSense300x250Config = document.createElement("ins");
        adSense300x250Config.setAttribute("class", "adsbygoogle")
        adSense300x250Config.setAttribute("style", "display:inline-block;width:300px;height:250px");
        adSense300x250Config.setAttribute("data-ad-client", "ca-pub-6785376994805476");
        adSense300x250Config.setAttribute("data-ad-slot", "4475598545");

        var adSense728x90Config = document.createElement("ins");
        adSense728x90Config.setAttribute("class", "adsbygoogle")
        adSense728x90Config.setAttribute("style", "display:inline-block;width:728px;height:90px");
        adSense728x90Config.setAttribute("data-ad-client", "ca-pub-6785376994805476");
        adSense728x90Config.setAttribute("data-ad-slot", "5000099341");

        var adSense970x90Config = document.createElement("ins");
        adSense970x90Config.setAttribute("class", "adsbygoogle")
        adSense970x90Config.setAttribute("style", "display:inline-block;width:970px;height:90px");
        adSense970x90Config.setAttribute("data-ad-client", "ca-pub-6785376994805476");
        adSense970x90Config.setAttribute("data-ad-slot", "4881796148");

        var adSense160x600Config = document.createElement("ins");
        adSense160x600Config.setAttribute("class", "adsbygoogle")
        adSense160x600Config.setAttribute("style", "display:inline-block;width:160px;height:600px");
        adSense160x600Config.setAttribute("data-ad-client", "ca-pub-6785376994805476");
        adSense160x600Config.setAttribute("data-ad-slot", "1860950947");

        var adSense250x250Config = document.createElement("ins");
        adSense250x250Config.setAttribute("class", "adsbygoogle")
        adSense250x250Config.setAttribute("style", "display:inline-block;width:250px;height:250px");
        adSense250x250Config.setAttribute("data-ad-client", "ca-pub-6785376994805476");
        adSense250x250Config.setAttribute("data-ad-slot", "6168982142");

        var adSense468x60Config = document.createElement("ins");
        adSense468x60Config.setAttribute("class", "adsbygoogle")
        adSense468x60Config.setAttribute("style", "display:inline-block;width:468px;height:60px");
        adSense468x60Config.setAttribute("data-ad-client", "ca-pub-6785376994805476");
        adSense468x60Config.setAttribute("data-ad-slot", "8810417340");


        var adSenseTag = document.createElement("script");
        adSenseTag.type = "text/javascript";
        adSenseTag.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

        var adSenseExecute = document.createElement("script");
        adSenseExecute.type = "text/javascript";
        adSenseExecute.innerText = "(adsbygoogle = window.adsbygoogle || []).push({});";

        function replaceAdSense(i, iframe, w, h) {

            var style = window.getComputedStyle(i);


            h = h || i.offsetHeight;
            w = w || i.offsetWidth;

            var styleH = style.height;
            var styleW = style.width;

            var config = null;

            if (w == 300 && h == 250)
                config = adSense300x250Config.cloneNode(true);
            if (w == 728 && h == 90)
                config = adSense728x90Config.cloneNode(true);
            if (w == 970 && h == 90)
                config = adSense970x90Config.cloneNode(true);
            if (w == 160 && h == 600)
                config = adSense160x600Config.cloneNode(true);
            if (w == 468 && h == 60)
                config = adSense468x60Config.cloneNode(true);
                 
            if (config != null) {

                if (iframe) {
                    i.parentNode.insertBefore(adSenseTag.cloneNode(true), i);
                    i.parentNode.replaceChild(config, i);
                    config.parentNode.appendChild(adSenseExecute.cloneNode(true));
                    config.parentNode.setAttribute("bok", "");
                } else {
                    var hasHref = i.querySelectorAll('[href]').length > 0;
                    var hasIframe = i.querySelectorAll('iframe').length > 0;
                    var hasObject = i.querySelectorAll('object').length > 0;
                    var hasScript = i.querySelectorAll('script').length > 0;
                    var hasImg = i.querySelectorAll('img').length > 0;

                    if (hasHref || hasIframe || hasObject || hasImg) {
                        i.innerHTML = '';
                        i.setAttribute('bok', '');
                        i.appendChild(adSenseTag.cloneNode(true));
                        i.appendChild(config);
                        i.appendChild(adSenseExecute.cloneNode(true));
                    }
                }


            }

        }

        function replace(i, iframe, w, h) {

            var style = window.getComputedStyle(i);
            if (style.display == 'none' || style.visibility == 'hidden')
                return;

            h = h || i.offsetHeight;
            w = w || i.offsetWidth;

            var styleH = style.height;
            var styleW = style.width;

            if (w == 728 && h == 90) {
                replaceElement(i, a728x90.cloneNode(true), iframe);
            }

            if (w == 120 && h == 600) {
                replaceElement(i, a120x600.cloneNode(true), iframe);
            }

            if (w == 160 && h == 600) {
                replaceElement(i, a160x600.cloneNode(true), iframe);
            }

            if (w == 300 && h == 250) {
                replaceElement(i, a300x250.cloneNode(true), iframe);
            }

            if (w == 336 && h == 280) {
                replaceElement(i, a336x280.cloneNode(true), iframe);
            }
        }

        function replaceElement(el, newEl, iframe) {

            if (iframe) {

                newEl.setAttribute('bok', '');
                el.parentNode.replaceChild(newEl, el);

            } else {

                var hasHref = el.querySelectorAll('[href]').length > 0;
                var hasIframe = el.querySelectorAll('iframe').length > 0;
                var hasObject = el.querySelectorAll('object').length > 0;
                var hasScript = el.querySelectorAll('script').length > 0;
                var hasImg = el.querySelectorAll('img').length > 0;

                if (hasHref || hasIframe || hasObject || hasImg) {
                    el.innerHTML = '';
                    el.setAttribute('bok', '');
                    el.appendChild(newEl);

                }

            }

            if (el.parentNode) {
                var parentStyle = el.parentNode.style;
                if (parentStyle.width == newEl.style.width && parentStyle.height == newEl.style.height) {
                    el.parentNode.style.overflow = 'hidden';
                }

            }


        }

        function isBok(e) {

            while (e && e != null) {
                if (e.hasAttribute('bok'))
                    return true;
                e = e.parentElement;
            }
            return false;

        }

        function findElements() {

            var replaceFunction = replace;

            


            var els = document.querySelectorAll('div, iframe, ins,img');
            for (var i = 0, max = els.length; i < max; i++) {
                var el = els[i];
                if (!isBok(el)) {
                    if (el.tagName == 'IFRAME')
                        replaceFunction(el, true);
                    else if (el.tagName == 'IMG') {
                        if (el.parentElement && el.parentElement.tagName == 'A') {
                            replaceFunction(el.parentElement, true, el.offsetWidth, el.offsetHeight);
                        }

                    } else {
                        if (el.children.length > 0)
                            replaceFunction(el, false);
                    }
                }


            }

        }

        var end = false;
        setInterval(function () {
            if (!end) {
                findElements();
            }

        }, 1000);

        setTimeout(function () {
            end = true;
        }, 20000);





       

    })();


