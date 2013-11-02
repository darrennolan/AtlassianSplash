## Atlassian Splash ##

**Atlassian Splash** is a really basic splash index page for showing all your links to your self hosted Atlassian products.

### Automatic Version Parsing ###

Whent he splash screen loads, simple jQuery goes and loads the home page of each of your Atlassian products and finds the version number to display against the links.

### Usage ###

Two HTML attribute tags are required per application link.

The first is the container with the attribute tag `data-toggle="atlassian-version"`, which lets the javascript know there's a `a href=` link to a particular Atlassian Product.

The second attribute tag `data-toggle='app-version'` indicates where the version number should be shown when the version is obtained from an application.

### Example Usage ###

    <div data-toggle="atlassian-version">
        <p>
            <a href="/jira">
                <img src="imgs/jira.png">
            </a>
        </p>
        <p class="app-version" data-toggle="app-version">
            Version...
        </p>
    </div>

### Some Notes ###

##### Must Be Hosted on Same Domain #####

Being JavaScript, this splash screen must be hosted on the same domain as where your Atlassian products are hosted.  This won't work with OnDemand products.  Attempting to do so will result in a Cross Domain security failure and it won't be able to obtain the product version number.

##### Jira, Confluence, Stash and Bamboo are the only Tested Applications #####

I don't use any other Atlassian Products at this stage.  But if you are using something else, feel free to adjust the parser and make a pull-request.

##### Customise Loading Example Included #####

My personally used splash screen is included, the resources are found in `/src/theme/` and the html is in `/src/theme_darrennolan.html`.  Which shows with a little trickery, without modifying the jQuery code, you can have a loading spinner from [Font Awesome](http://fontawesome.io/) until the version is parsed.

### Special Thanks ###

To of course, [Atlassian](https://www.atlassian.com/), whos products I've come very much to love over the years.

----------

![](http://i.imgur.com/rHvsQFq.jpg)

----------

![](http://i.imgur.com/TKsOXJX.jpg)
