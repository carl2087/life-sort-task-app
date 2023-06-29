import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRequest } from '../../api/axiosDefaults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '../../components/Avatar';
import Asset from '../../components/Asset';
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/Button.module.css'
import { Link } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';

const ProfilePage = () => {

    useRedirect('loggedOut');

    const [hasLoaded, setHasLoaded] = useState(false)
    const currentUser = useCurrentUser();
    const {id} = useParams();
    const history = useHistory();
    const [profileData, setProfileData] = useState({
        name: '',
        image: '',
        owner: '',
        content: '',
    })

    const {name, owner, image, content} = profileData;

    useEffect(() => {
        const fetchProfileData = async () => {
            if (currentUser?.profile_id.toString() === id) {
                try {
                    const { data } = await axiosRequest.get(`/profiles/${id}`);
                    const { name, owner, image, content } = data;
                    setProfileData({name, owner, image, content});
                    setHasLoaded(true)
                } catch (error) {
                }
            } else {
                history.push('/')
            }
        };
        fetchProfileData();
    }, [currentUser, history, id])

    const handleEdit = () => {
        history.push(`/profile/${id}/edit`)
    }

    const handlePasswordChange = () => {
        history.push(`/profile/${id}/changepassword`)
    }

    const handleNameChange = () => {
        history.push(`/profile/${id}/changename`)
    }

    return (
        <div>
            <Row>
                <Col className='col-12 text-center'>
                {hasLoaded ?  (
                    <>               
                    <Avatar src={image} height={150} />
                    <h1>{name.length ? `${name}'s profile` : `${owner}'s profile`}</h1>
                    <p>{content.length ? `${content}` : `Why not edit your profile and add an about me description?` }</p>
                    <Button
                    onClick={handleEdit}
                    className={btnStyles.ButtonStyle}
                    >Edit profile
                    </Button>
                    <Button
                    onClick={handlePasswordChange}
                    className={btnStyles.ButtonStyle}
                    >Edit password
                    </Button>
                    <Button
                    onClick={handleNameChange}
                    className={btnStyles.ButtonStyle}
                    >Edit username
                    </Button>
                    <br/>
                    <span>
                        <Link to={'/customtasks'}>
                        <Button
                        className={btnStyles.ButtonStyle}
                        >Custom tasks</Button>
                        </Link>
                    </span>
                    <span>
                        <Link to='/quicktasks'>
                        <Button
                        className={btnStyles.ButtonStyle}
                        >Quick tasks</Button>
                        </Link>
                    </span>
                    <span>
                        <Link to='/holidaytasks'>
                        <Button
                        className={btnStyles.ButtonStyle}
                        >Holiday tasks</Button>
                        </Link>
                    </span>
                    </> 
                    ) : (
                        <Asset spinner />
                    )}
                </Col>
            </Row>
        </div>
    )}

export default ProfilePage