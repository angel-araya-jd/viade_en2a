import React from 'react';
import ldflex from '@solid/query-ldflex';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import {
  ManageFriendsWrapper,
  ManageFriendsCard,
  ButtonFriend,
} from './manageFriends.style';

/**
 * Welcome Page UI component, containing the styled components for the Welcome Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const ManageFriendsContent = props => {
  const { webId,friends} = props;
  const { t } = useTranslation();

  async function ldflexDeleter(friend){
     return ldflex[webId].knows.delete(ldflex[friend]);
  }
  async function deleteFriend(event, friend) {
    event.preventDefault();
    ldflexDeleter(friend);
    await reload();
  }

  const reload = () => {
    window.location.reload(true);
  }
  
  async function viewRoutes(event, friend) {
    event.preventDefault();
    //redirect to friend routes
  }  

  return (
    <ManageFriendsWrapper data-testid="manageFriends-wrapper">
      <ManageFriendsCard data-testid="manageFriends-card">
      {
        friends.map(friend => (
        <Dropdown as={ButtonGroup}>
          <ButtonFriend variant="success"  onClick={(event) => viewRoutes(event,friend)} width='20' data-testid={"buttonFriend"+friend}  key={"buttonFriend"+friend}>{friend}</ButtonFriend>
          <DropdownButton variant="light" id="dropdown-basic-button" key={friend+"dropdown"} title=""> 
        <Dropdown.Item as="button" href={friend} key={friend+"dropdownI1"}>{t('manageFriends.viewProfile')}</Dropdown.Item>
        <Dropdown.Item as="button"  onClick={(event) => deleteFriend(event,friend)} key={friend+"dropdownI2"}>{t('manageFriends.delete')}</Dropdown.Item>
        <Dropdown.Item as="button"  onClick={(event) => viewRoutes(event,friend)} key={friend+"dropdownI3"}>{t('manageFriends.viewRoutes')}</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        ))
      }
      </ManageFriendsCard>
    </ManageFriendsWrapper>
  );
};