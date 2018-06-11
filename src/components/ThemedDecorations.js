import React from "react";

export default class ThemedDecorations extends React.Component {
  render() {
    const clonedChildren = this.props.children.map((children) => {
      return React.cloneElement(children, {className: this.props.theme})
    });

    return (
      <div>
        {clonedChildren}
      </div>
    );
  }
}
