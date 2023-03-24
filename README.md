# Krishan-Persona-Publisher SDK

The is a JavaScript SDK for writing applications that interact with the ad servers from either Node.js, JS, or React environments.

## Installing the SDK

Grab the latest version of the SDK off of [NPM](https://www.npmjs.com/package/krishan-persona-assignment):

```sh
npm install krishan-persona-assignment
```

### Initializing a client

To initialize a client, simply pass in a config as follows:

```ts
// connect to Ad campaign
let client = new PublishAdd({
  propertySlug: "<YOUR_PROPERTY_SLUG>",
});
```

#### Showing an ad

First, you will need to create real estate on the DOM where you would like the ad to be positioned. This `div` needs to have an id specified, which you will pass into the SDK.

```html
<div id="native-slot"></div>
```

```ts
import { PublishAdd, AdDataType } from "krishan-persona-assignment";

// connect to Ad campaign
let client = new PublishAdd({
  propertySlug: "<YOUR_PROPERTY_SLUG>",
});

// initialize a native placement
let nativePlacement = client.initializeNative("<YOUR_PLACEMENT_SLUG>");

// register the placement and render it in the specified HTML element
nativePlacement.show("native-slot", nativeTemplate);
```

#### Creating a template

In the above example, you would have to create a nativeTemplate for the SDK to render. The SDK expects templates to be written in JSX. Here is an example of a native template:

```ts
// create a native template
function nativeTemplate(AdData: AdDataType): JSX.Element {
  return (
    <img src={AdData.image} alt="creative_img" style={{ width: "100%" }}></img>
  );
}
```

Right now AdDataType contains only 1 field which is the image to be displayed.
For example,

```
AdDate:{
	"image":"https://d1q98dzwj6s2rb.cloudfront.net/up/asset/8fb3149953/b83188c4f0.png"
}
```
