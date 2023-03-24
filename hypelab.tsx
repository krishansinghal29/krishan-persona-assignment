import ReactDOM from "react-dom";

type AdMetadataT = {
  image: string;
};

/* <a href="https://ibb.co/TMcZHnB"><img src="https://i.ibb.co/s9jhFDv/ETicket-NF2-OEVBK1-V0-TBYDX6606.jpg" alt="ETicket-NF2-OEVBK1-V0-TBYDX6606" border="0"></a> */

const AdMetadata: AdMetadataT = {
  image: "https://i.ibb.co/s9jhFDv/ETicket-NF2-OEVBK1-V0-TBYDX6606.jpg",
};

class HypeLab {
  propertySlug: string;
  constructor(params: { propertySlug: string }) {
    this.propertySlug = params.propertySlug;
  }
  initializeNative(placementSlug: string) {
    return {
      placementSlug: placementSlug,
      show(
        nativeSlot: string,
        nativeTemplate: (_: AdMetadataT) => JSX.Element
      ) {
        ReactDOM.render(
          nativeTemplate(AdMetadata),
          document.getElementById(nativeSlot)
        );
      },
    };
  }
}

export { AdMetadataT, HypeLab };
