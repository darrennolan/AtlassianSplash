$(function() {
    var applications = $('[data-toggle=atlassian-version]');

    applications.each(function(index, application) {
        $.ajax({
            url: String( $(application).find('a').attr('href') )
        }).complete(function(xhr, data) {

            response = $.parseHTML( xhr.responseText );

            // Jira Version Hunting
            if ( $(response).find('[title=JiraVersion]').length ) {
                setVersion(application, $(response).find('[title=JiraVersion]').val());
                return;
            }

            // Confluence Version Hunting
            if ( $(response).find('#footer-build-information').length ) {
                setVersion(application, $(response).find('#footer-build-information').text());
                return;
            }

            // Stash Version Hunting
            if ( $(response).find('#product-version').length ) {
                setVersion(application, $(response).find('#product-version').text());
                return;
            }

            // Bamboo Version Hunting
            if ( $(response).find('.footer-body').length ) {
                setVersion(
                    application,
                    $(response).find('.footer-body').text().match(
                        /\d+(\.\d+)+/,
                        "\\$1"
                    )[0]
                );
                return;
            }

            // No idea sorry
            setVersion(application, 'N/A');
        });
    });

    function setVersion (application, version_string) {
        version_string = $.trim(version_string).replace('v', '');

        $(application).find('[data-toggle=app-version]').text( 'Version: ' + version_string);
    }

});
