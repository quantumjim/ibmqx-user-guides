$(function() {
    $('body').fadeIn(0);
    $('.page-content > blockquote:first-child').remove();
    $('table').removeAttr('border');

    const styleColorTextPrimary = () => {
        $('h3, h4, h5, h6, .toc-backref, .contents, .toctree-wrapper, .contents a, .toctree-wrapper a, .globaltoc a.current').addClass('mdl-color-text--primary');
    }
    function deleteMainHeader() {
        const $main = $('.mdl-layout__content');
        $main.find('.mdl-layout__drawer').remove();
        //TODO: Extract to function
        const $links = $('.page-content').find('a');
        $.each($links, function(index, link) {
            if(link.innerText.indexOf('composer') !== -1) {
               $(link).addClass('linkButton');
               const text = link.innerText;
               link.innerText = '';
               $(link).append($(`<button class="composerButton">${text}</button>`));
            }
         });
    }
    function reconstructionDrawerGlobalToc() {
        const $globaltoc = $('.mdl-layout__drawer nav');
        const $lists = $globaltoc.find('li');
        $.each($lists, function(index, li) {
            const $li = $(li);
            const $linkWrapper = $('<span class="link-wrapper"></span>');
            const $link = $li.children('a').addClass('ibm-type-b-tight');
            const $div = $('<div class="item"></div>');
            $li.append($div.append($linkWrapper.append($link)));

            const isCurrent = $li.hasClass('current') && !$link.hasClass('current');
            const isActive = $li.hasClass('current') && $link.hasClass('mdl-color-text--primary')
            const $ul = $li.children('ul');
            if(isActive){
                $div.addClass('active');
            }
            if ($ul.length && $ul[0].children.length > 0) {
                const ulId = `globalnav-${index}`;
                $ul.attr('id', ulId);
                $ul.addClass('collapse sublist');

                const $toggleWrapper = $('<span class="nav-toggle show"></span>');
                $linkWrapper.addClass('title');
                $linkWrapper.children('a').removeAttr("href").css("cursor","pointer");
                $linkWrapper.children('a').addClass('ibm-type-b-tight semibold');
                $div.addClass('title');
                $li.append($div.append(
                    $linkWrapper.append(
                        $toggleWrapper.append(
                            $(`<a class="" data-toggle="#${ulId}">
                           <svg class="iconSize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                             <defs><style>.cls-1{fill:none;}</style></defs>
                              <title>Duo_SystemIcon_Master_01</title>
                              <g id="Icon"><polygon points="16 22 6 12 7.414 10.586 16 19.172 24.586 10.586 26 12 16 22"/></g>
                              <g id="Transparent_Rectangle" data-name="Transparent Rectangle">
                               <rect class="cls-1" width="32" height="32" transform="translate(0 32) rotate(-90)"/>
                              </g>
                           </svg>
                </a>`)
                        )
                    )
                )).append($ul);
            }
        });
    }

    function collapse() {
        $('.mdl-layout__drawer nav .item .title').click(function() {
            const $toggle = $(this).children('span .nav-toggle').children('a');
            const id = $toggle.attr('data-toggle');
            $(`ul${id}`).toggleClass('show').animate({height: "toggle", opacity: "toggle"});
            $toggle.parent().toggleClass('show');
        });
    }
    function collapseResponsive(){
        $('.iconResponsive').click(function() {
        $('.iconResponsive').toggleClass('show');
            $('.globaltoc').toggleClass('show').animate({height: "toggle", opacity: "toggle"});
        });
    }
    function collapseMediumResponsive(){
        $('.iconMediumResponsiveClose').click(function() {
            $('.mdl-layout__drawer').toggleClass('close');
            $('.mdl-layout__content').toggleClass('close');
            $('.iconMediumResponsiveClose').toggleClass('close');
            $('.iconMediumResponsiveTableOfContent').toggleClass('close');
        });
         $('.iconMediumResponsiveTableOfContent').click(function() {
            $('.mdl-layout__drawer').toggleClass('close');
            $('.mdl-layout__content').toggleClass('close');
            $('.iconMediumResponsiveClose').toggleClass('close');
            $('.iconMediumResponsiveTableOfContent').toggleClass('close');
        });
    }
    function styleMdlCodeBlock() {
        $('pre').hover(function() {
            $(this).attr('click-to-copy', 'click to copy...');
        });
        $('pre').click(function(){
            var result = copyClipboard(this);
            if (result) {
                $(this).attr('click-to-copy', 'copied!');
            }
        });
    }

    function copyClipboard(selector) {
        var body = document.body;
        if(!body) return false;

        var $target = $(selector);
        if ($target.length === 0) { return false; }

        var text = $target.text();
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        var result = document.execCommand('copy');
        document.body.removeChild(textarea);
        return result;
    }

    function quickSearchClickEvent() {
        const $breadcrumb = $('.breadcrumb');

        $('#waterfall-exp').focus(() => {
            if ($(window).width() <= 1024) {
                $breadcrumb.hide();
            }
        }).blur(() => {
            if ($(window).width() <= 1024) {
                $breadcrumb.show();
            }
        });
    }
    function addIconsDrawer(){
        $('.mdl-layout-title').append($(`<svg class="iconResponsive iconSize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <defs>
                      <style>.cls-1{fill:none;}</style>
                  </defs>
                  <title>Duo_SystemIcon_Master_01</title>
                  <g id="Icon"><polygon points="16 10 26 20 24.586 21.414 16 12.828 7.414 21.414 6 20 16 10"/></g>
                  <g id="Transparent_Rectangle" data-name="Transparent Rectangle">
                      <rect class="cls-1" width="32" height="32" transform="translate(32 0) rotate(90)"/>
                      <rect class="cls-1" width="32" height="32" transform="translate(32 0) rotate(90)"/>
                  </g>
              </svg>`));
        $('.mdl-layout-title').append($(`<svg class="iconMediumResponsiveClose iconSize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <defs>
                  <style>.cls-1{fill:none;}</style>
              </defs>
              <title>Duo_SystemIcon_Master_01</title>
              <g id="Icon">
                  <polygon points="17.414 16 24 9.414 22.586 8 16 14.586 9.414 8 8 9.414 14.586 16 8 22.586 9.414 24 16 17.414 22.586 24 24 22.586 17.414 16"/>
              </g>
              <g id="Transparent_Rectangle" data-name="Transparent Rectangle">
                  <rect class="cls-1" width="32" height="32"/>
                </g>
          </svg>`));
        $('.mdl-layout-title').append($(`<svg class="iconMediumResponsiveTableOfContent iconSize" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <defs>
                  <style>.cls-1{fill:none;}</style>
              </defs>
              <title>toc</title>
              <rect x="4" y="6" width="18" height="2"/>
              <rect x="4" y="12" width="18" height="2"/>
              <rect x="4" y="18" width="18" height="2"/>
              <rect x="4" y="24" width="18" height="2"/>
              <rect x="26" y="6" width="2" height="2"/>
              <rect x="26" y="12" width="2" height="2"/>
              <rect x="26" y="18" width="2" height="2"/>
              <rect x="26" y="24" width="2" height="2"/>
              <rect class="cls-1" width="32" height="32"/>
          </svg>`));

    }
    addIconsDrawer();
    styleMdlCodeBlock();
    styleColorTextPrimary();
    reconstructionDrawerGlobalToc();
    collapse();
    quickSearchClickEvent();
    deleteMainHeader();
    collapseResponsive();
    collapseMediumResponsive();

    $('.mdl-layout__content').focus();
});