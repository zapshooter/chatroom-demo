import React from 'react'
import { InputGroup, Icon } from 'rsuite';
import {Link} from "react-router-dom"

const VideoChat = () => {
	return (
		<InputGroup.Button>
		<Link to={{ pathname: "https://video-chat-app-void.netlify.app/" }} target="_blank" >
			<Icon icon="phone" />
		</Link>
        
      </InputGroup.Button>
	)
}

export default VideoChat