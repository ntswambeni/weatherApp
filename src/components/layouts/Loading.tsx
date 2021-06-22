import React from 'react'
import LoadingContainer from './LoadingContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    )
}

export default Loading
