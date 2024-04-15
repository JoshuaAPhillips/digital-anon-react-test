import React, { Component } from "react";
import mirador from "mirador";

const loadedManifests = [
  {
    manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-1-manifest.json",
    provider: "NYPL"
  }
]

class Mirador extends Component {
  componentDidMount() {
    const config = {
      id: "mirador",
      catalog: [
        {
          loadedManifest: loadedManifests.manifestId
        }
      ]
    }
    const { plugins } = this.props;
    mirador.viewer(config, plugins);
  }

  render() {
    const { config } = this.props;
    return <div 
      id={config.id} />;
  }
}

export default Mirador