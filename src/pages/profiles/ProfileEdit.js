import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import {
    useHistory,
    useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Profile.module.css";
import { useRedirect } from "../../hooks/useRedirect";

const ProfileEdit = () => {

    useRedirect('loggedOut');

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [profileData, setProfileData] = useState({
        name: "",
        content: "",
        image: "",
    });

    const { name, content, image } = profileData;

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
        if (currentUser?.profile_id?.toString() === id) {
            try {
            const { data } = await axiosRequest.get(`/profiles/${id}`);
            const { name, content, image } = data;
            setProfileData({ name, content, image });
            } catch (error) {
            history.push("/");
            }
        } else {
            history.push("/");
        }
        };
        handleMount();
    }, [currentUser, history, id]);

    const handleChange = (event) => {
        setProfileData({
        ...profileData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);

        if (imageFile?.current?.files[0]) {
        formData.append("image", imageFile?.current?.files[0]);
        }

        try {
        const { data } = await axiosRequest.put(`/profiles/${id}/`, formData);
        setCurrentUser((currentUser) => ({
            ...currentUser,
            profile_image: data.image,
        }));
        history.goBack();
        } catch (error) {
        setErrors(errors.response?.data);
        }
    };

    const textFields = (
        <>
        <Form.Group controlId="content">
            <Form.Label>Bio</Form.Label>
            <Form.Control
            as="textarea"
            value={content}
            onChange={handleChange}
            name="content"
            rows={7}
            />
        </Form.Group>

        {errors?.content?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
            {message}
            </Alert>
        ))}

        <Button
            className={btnStyles.ButtonStyle}
            onClick={() => history.goBack()}
        >
            Cancel
        </Button>
        <Button className={btnStyles.ButtonStyle} type="submit">
            Save
        </Button>
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
        <Row className={styles.ProfileFormRow}>
            <Col className="col-12 col-md-6 text-center">
            <Form.Group>
                {image && (
                <figure>
                    <Image className={styles.ProfileImage} src={image} alt="Profile image of current profile" fluid />
                </figure>
                )}
                {errors?.image?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                </Alert>
                ))}
                <div>
                <Form.Label
                    className={`${btnStyles.ButtonStyle} btn my-auto`}
                    htmlFor="image-upload"
                >
                    Change the image
                </Form.Label>
                </div>
                <Form.Control
                className={styles.ProfileFormImageControl}
                type="file"
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                    if (e.target.files.length) {
                    setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                    });
                    }
                }}
                />
            </Form.Group>
            </Col>
            <Col className="text-center col-12 col-md-6">{textFields}</Col>
        </Row>
        </Form>
    );
};

export default ProfileEdit;
