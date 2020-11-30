import styles from './loader.module.scss'

export default function Loader() {
    return (
        <div className={styles.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
