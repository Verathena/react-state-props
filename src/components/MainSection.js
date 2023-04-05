import React, { useState } from 'react';
import Buttons from "../components/Buttons";
import Languages from "../components/Languages"

const MainSection = () => {
    return (
    <div className="mainSection--wrap">
        <Buttons />
        <Languages />
    </div>
  )
}

export default MainSection;
