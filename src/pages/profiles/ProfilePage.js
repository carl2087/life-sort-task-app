import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRequest } from '../../api/axiosDefaults';
import { Row, Col,} from 'react-bootstrap';
import Avatar from '../../components/Avatar';
import Asset from '../../components/Asset';
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/Button.module.css'
import { Link } from 'react-router-dom';

const ProfilePage = () => {

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
                    console.log(error)
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

    return (
        <div>
            <Row>
                <Col className='col-8 offset-2 text-center'>
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