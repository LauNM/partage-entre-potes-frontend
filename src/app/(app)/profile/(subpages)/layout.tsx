export default function Layout({children}) {
    return (
        <div style={{width: '100%', height: '100%', background: '#ECECEC'}}>
            <div style={{boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                padding: '20px'}}>{children}</div>
        </div>)
}