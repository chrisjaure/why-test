import { useEffect, useRef } from 'react';

const AsciinemaPlayer = ({
    src,
    ...asciinemaOptions
}) => {
    const ref = useRef(null);

    useEffect(() => {
      ;(async function () {
        const AsciinemaPlayerLibrary = await import('asciinema-player')
        AsciinemaPlayerLibrary.create(src, ref.current, asciinemaOptions)
      })()
    }, [src])

    return <div ref={ref} />;
};

export default AsciinemaPlayer;
