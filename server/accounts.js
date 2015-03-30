Accounts.onCreateUser(function (options, user) {
    var accessToken = user.services.github.accessToken,
        result,
        profile;
    result = Meteor.http.get("https://api.github.com/user", {
        params: {
            access_token: accessToken
        },
        headers: {"User-Agent": "stephenhammond"}
    });
    if (result.error)
        throw result.error;

    profile = _.pick(result.data,
        "login",
        "name",
        "avatar_url",
        "url",
        "company",
        "blog",
        "location",
        "email",
        "bio",
        "html_url");

    user.profile = profile;

    // default user roles to viewers on creation unless they are the first user
    user.roles = "viewer";

    return user;
});


