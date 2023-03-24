import ReactDOM from "react-dom";

type AdDataType = {
  image: string;
};

/* <a href="https://ibb.co/TMcZHnB"><img src="https://i.ibb.co/s9jhFDv/ETicket-NF2-OEVBK1-V0-TBYDX6606.jpg" alt="ETicket-NF2-OEVBK1-V0-TBYDX6606" border="0"></a> */

const AdData: AdDataType = {
  image: "https://i.ibb.co/s9jhFDv/ETicket-NF2-OEVBK1-V0-TBYDX6606.jpg",
};

class PublishAdd {
  propertySlug: string;
  constructor(params: { propertySlug: string }) {
    this.propertySlug = params.propertySlug;
  }
  initializeNative(placementSlug: string) {
    return {
      placementSlug: placementSlug,
      show(nativeSlot: string, nativeTemplate: (_: AdDataType) => JSX.Element) {
        ReactDOM.render(
          nativeTemplate(AdData),
          document.getElementById(nativeSlot)
        );
      },
    };
  }
}

export { AdDataType, PublishAdd };
