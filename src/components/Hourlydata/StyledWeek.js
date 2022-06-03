import styled from 'styled-components';

const StyledWeek = styled.div`
   color:rgba(73, 71, 71, 0.7);   
   margin-top: 20px;
  .box_info {
  text-align: center;
  display: flex;
  justify-content: center;
  background: grey;
  color: white;
  border-radius: 20px;
  padding: 15px;
  width: 100%;
  font-size: 17px;
  min-height: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: -5px 9px 10px -7px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -5px 9px 10px -7px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 9px 10px -7px rgba(0, 0, 0, 0.1);
}
.box_info .temp_info {
  font-size: 18px;
  font-weight: bold;
}
.box_info img {
  max-width: 80px;
  width: 100%;
  margin: 10px auto;
}
@media (max-width: 480px) {
  .box_info img {
    max-width: 120px;
  }
}
.swiper-wrapper {
  margin: 10px 0px;
}
`;

export default StyledWeek;