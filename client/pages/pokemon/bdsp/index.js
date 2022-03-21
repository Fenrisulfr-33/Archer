const API_BASE_URL = process.env.BACKEND_URL;

export default function BDSP() {
    return (
        <>
        </>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/BDSP`);
    const national = await response.json();
    return { props: { national } }
}