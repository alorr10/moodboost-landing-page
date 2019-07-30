import React from "react"
import { Image } from "react-bootstrap"
import appStore from "../images/appstore@3x.png"
import playStore from "../images/playstore@3x.png"
import { appStoreLink, playStoreLink } from "../constants"

export const AppStoreImage = () => (
  <a href={appStoreLink}>
    <Image src={appStore} rounded style={{ width: 180, marginBottom: 5 }} />
  </a>
)

export const PlayStoreImage = () => (
  <a href={playStoreLink}>
    <Image src={playStore} rounded style={{ width: 180 }} />
  </a>
)
