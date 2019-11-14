import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getTracks, getArtists, selectedTrack } from "../service/tracksData.js"
import TrackInfo from "../components/trackInfo"
import Logo from "../components/logo"
import Buttons from "../components/buttons"
import Dropdown from "../components/dropdown"
import YouTubePlayer from "react-player/lib/players/YouTube"

class IndexPage extends Component {
  state = {
    isPlaying: true,
    playing: true,
    allTracks: [],
    artists: [],
    selectedArtist: null,
  }

  componentDidMount() {
    const allTracks = getTracks()
    const tracks = getTracks()
    const artists = getArtists()
    const selectedArtist = "All Artists"
    const track = selectedTrack(allTracks)
    const { url, trackInfo } = track

    this.setState({
      allTracks,
      tracks,
      artists,
      selectedArtist,
      url,
      trackInfo,
    })
  }

  handlePlayPauseIcon = () => {
    const isPlaying = !this.state.isPlaying
    this.setState({
      isPlaying,
    })
    this.handleplaypause()
  }

  handleplaypause = () => {
    const playing = !this.state.playing
    this.setState({
      playing,
    })
  }

  handleNext = () => {
    const { tracks } = this.state

    const track = selectedTrack(tracks)
    const { url, trackInfo } = track
    this.setState({ url, trackInfo, isPlaying: true, playing: true })
  }

  handleSelectArtist = e => {
    const selectedArtist = e.target.value
    const { allTracks } = this.state

    const filtered =
      selectedArtist === "All Artists"
        ? allTracks
        : allTracks.filter(t => t.artist === selectedArtist)

    const track = selectedTrack(filtered)
    const { url, trackInfo } = track

    this.setState({
      tracks: filtered,
      selectedArtist,
      url,
      trackInfo,
      isPlaying: true,
      playing: true,
    })
  }

  render() {
    const {
      isPlaying,
      playing,
      artists,
      selectedArtist,
      url,
      trackInfo,
    } = this.state

    return (
      <Layout>
        <SEO title="Home" />
        <div className="container">
          <YouTubePlayer
            url={url}
            className="player"
            width="100vw"
            height="calc(100vw / 2)"
            handlePlayPause={this.handleplaypause}
            playing={playing}
            onEnded={this.handleNext}
          />
          <TrackInfo info={trackInfo} />
          <Logo />
          <Dropdown
            artists={artists}
            value={selectedArtist}
            onSelectArtist={this.handleSelectArtist}
          />
          <Buttons
            onPlayPauseIcon={this.handlePlayPauseIcon}
            isPlaying={isPlaying}
            onNext={this.handleNext}
          />
          <p>stonesthrow.com</p>
          <a
            className="link"
            href="https://www.stonesthrow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            stonesthrow.com
          </a>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
