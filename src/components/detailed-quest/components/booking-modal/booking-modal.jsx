import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as S from './booking-modal.styled';
import {ReactComponent as IconClose} from 'assets/img/icon-close.svg';
import {getApi} from "../../../../store/application/selectors";
import {sendForm} from "../../../../store/api-actions";
import {Status} from "../../../../constants/constants";

const Fields = {
  Name: 'booking-name',
  Phone: 'booking-phone',
  People: 'booking-people',
  Legal: 'booking-legal'
};

const Errors = {
  ServerError: 'Ошибка сервера, попробуйте позже',
  FieldError: 'Не все поля заполнены'
};

const SUCCESS_MESSAGE = 'Данные успешно отправлены';

const BookingModal = ({getApi, handleCloseModalClick}) => {
  const [data, setData] = useState({
    name: '',
    peopleCount: '',
    phone: '',
    isLegal: false,
    serverError: false,
    errors: [],
    success: false
  });

  const {name, peopleCount, phone, isLegal, errors, serverError, success} = data;

  const handleFieldChange = (evt) => {
    const currentData = {};
    const target = evt.target;
    const value = target.value;

    switch (target.name) {
      case Fields.Name:
        currentData['name'] = value;
        break;
      case Fields.Phone:
        currentData['phone'] = value;
        break;
      case Fields.People:
        currentData['peopleCount'] = Number(value);
        break;
      case Fields.Legal:
        currentData['isLegal'] = true;
        break;
      default:
        break;
    }

    setData({
      ...data,
      ...currentData
    });

  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    sendForm({name, peopleCount, phone, isLegal}, getApi)
      .then((data) => {
        setData({
          ...data,
          success: true,
        });
      })
      .catch((err) => {
        if (err.response.status === Status.Bad) {
          setData({
            ...data,
            errors: err.response.data.messages,
          });
        } else {
          setData({
            ...data,
            serverError: false,
          });
        }
      });
  };

  const onCloseModalClick = () => {
    setData({
      name: '',
      peopleCount: '',
      phone: '',
      isLegal: false,
      serverError: false,
      errors: '',
      success: false
    });

    handleCloseModalClick();
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onCloseModalClick}>
          <IconClose width="16" height="16"/>
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        {success || <S.ModalTitle>Оставить заявку</S.ModalTitle>}

        {serverError && <S.BookingErrors>{Errors.ServerError}</S.BookingErrors>}
        {errors && <S.BookingErrors>{errors.map(item => <div key={item}>{item}</div>)}</S.BookingErrors>}

        {success ?
          <S.BookingSuccess>{SUCCESS_MESSAGE}</S.BookingSuccess>
          :
          <S.BookingForm
            action="https://echo.htmlacademy.ru"
            method="post"
            id="booking-form" onSubmit={handleFormSubmit}
          >
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
              <S.BookingInput
                type="text"
                id="booking-name"
                name="booking-name"
                placeholder="Имя"
                required
                onChange={handleFieldChange}
              />
            </S.BookingField>
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-phone">
                Контактный телефон
              </S.BookingLabel>
              <S.BookingInput
                type="tel"
                id="booking-phone"
                name="booking-phone"
                placeholder="Телефон"
                required
                onChange={handleFieldChange}
              />
            </S.BookingField>
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-people">
                Количество участников
              </S.BookingLabel>
              <S.BookingInput
                type="number"
                id="booking-people"
                name="booking-people"
                placeholder="Количество участников"
                required
                onChange={handleFieldChange}
              />
            </S.BookingField>
            <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
            <S.BookingCheckboxWrapper>
              <S.BookingCheckboxInput
                type="checkbox"
                id="booking-legal"
                name="booking-legal"
                required
                onChange={handleFieldChange}
              />
              <S.BookingCheckboxLabel
                className="checkbox-label"
                htmlFor="booking-legal"
              >
                <S.BookingCheckboxText>
                  Я согласен с{' '}
                  <S.BookingLegalLink href="#">
                    правилами обработки персональных данных и пользовательским
                    соглашением
                  </S.BookingLegalLink>
                </S.BookingCheckboxText>
              </S.BookingCheckboxLabel>
            </S.BookingCheckboxWrapper>
          </S.BookingForm>
        }
      </S.Modal>
    </S.BlockLayer>
  )
};

BookingModal.propTypes = {
  getApi: PropTypes.func.isRequired,
  handleCloseModalClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  getApi: getApi(state),
});


export {BookingModal};
export default connect(mapStateToProps)(BookingModal);
