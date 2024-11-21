# umami_extension

This repo is just to store my lazy fix for umami. [This commit](https://github.com/e621ng/e621ng/pull/796/commits/c60b6ff020822162a7405be7dd318ef28ff70cba)  broke umami and many other extensions that look for the **"post-preview"** class, but has since been updated to **"thumbnail"**.

This repo also contains a fix for videos stopping the slideshow due to a typo in the code.

**There are 2 versions of the fix:**
1. Just the fix (It will look exactly the same as before)
2. The fix but with darkened ui colors to bring more focus to the image (aka: Dark Mode). I have been personally  using this version for years now.

To install (chrome):
----
1. Go to [releases](https://github.com/Temmie-Flakes/umami_extension/releases) and download the zip version you want (regular or dark mode)
2. Extract the zip
3. Go to your browsers "manage extensions" page
4. Turn on "developer mode"
5. Click "Load unpacked" and point the the folder you extracted

Notes:
----
- If you are the creator of the extension (@wolfgang) and wish to modify/take down this repo, then submit an issue report as I do not use telegram. 
- I am not a web developer and networking scares me. So I am very unfimilar with the way extensions need to be coded and packed. I not even sure how to update the "version" of the extension so I am just leaving it as 2.3.0

To install (Firefox Developer Edition):
----
<sub><sup>thanks to [lolwut123](https://e621.net/users/168593) for instructions for firefox</sup></sub>
* You need the [development version of Firefox](https://www.mozilla.org/en-US/firefox/developer/) to be able to have the extension perminently (otherwise you must load it as a "Temporary Add-on" which will get deleted it when you restart firefox)
1. Go to [releases](https://github.com/Temmie-Flakes/umami_extension/releases) and download the zip version you want (regular or dark mode)
2. Type `about:config` in the adress bar
3. Click `Accept the Risk and Continue`
4. search for `xpinstall.signatures.required` and click the toggle button on the right to set it to `false`
5. Go to your browsers `Manage Your Extensions` page at `about:addons`
6. Click the **gear icon** then `Install Add-on From File...` then point to the .zip file you downloaded

To install (Firefox):
----
* Not recommended as it will delete the extension on reload
1. Go to [releases](https://github.com/Temmie-Flakes/umami_extension/releases) and download the zip version you want (regular or dark mode)
2. Go to your browsers `Manage Your Extensions` page at `about:addons`
3. Click the **gear icon** then `Debug Add-ons` then point to the .zip file you downloaded
4. Click the `Load Temporary Add-on..` then point to the .zip file you downloaded

Todo:
----
- [ ] Migrate to Manifest v3
