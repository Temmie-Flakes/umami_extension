# umami_extension

This repo is just to store my lazy fix for umami. [This commit](https://github.com/e621ng/e621ng/pull/796/commits/c60b6ff020822162a7405be7dd318ef28ff70cba)  broke umami and many other extensions that look for the **"post-preview"** class, but has since been updated to **"thumbnail"**.

This repo also contains a fix for videos stopping the slideshow due to a typo in the code.

**There are 2 versions of the fix:**
1. Just the fix (It will look exactly the same as before)
2. The fix but with darkened ui colors to bring more focus to the image (aka: Dark Mode). I have been personally  using this version for years now.

To install:
----
1. Go to [releases](https://github.com/Temmie-Flakes/umami_extension/releases) and download the zip version you want (regular or dark mode)
2. Extract the zip
3. Go to your browsers "manage extensions" page
4. Turn on "developer mode"
5. Click "Load unpacked" and point the the folder you extracted

Notes:
----
- I am not sure if this will work on firefox as the code was ripped from google extensions. There is code in place for refrencing the browser you are using so it might work? **let me know if it does not work on firefox and I will look into it** *(you can just submit an issue report)* as it is just a few lines of code that need to be fixed.
- If you are the creator of the extension (@wolfgang) and wish to modify/take down this repo, then submit an issue report as I do not use telegram. 
- I am not a web developer and networking scares me. So I am very unfimilar with the way extensions need to be coded and packed. I not even sure how to update the "version" of the extension so I am just leaving it as 2.3.0


Todo:
----
- [ ] Migrate to Manifest v3
