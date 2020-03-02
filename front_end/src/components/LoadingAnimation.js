import React from 'react';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const styles = ({
    // places loading animation in center of screen
    root: {
        flex: 1,
        marginTop: '20%',
        alignItems: 'center'
    }
})

class LoadingAnimation extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <MoonLoader
                    css={override}
                    sizeUnit={"px"}
                    size={60}
                    color={'#123abc'}
                    loading={true}
                />
            </div> 
        )
    }
}

export default LoadingAnimation;