import styles from '@styles/Auction.module.css';
import { useState } from 'react';
import {
    Modal,
    Box,
    Button,
    Select,
    MenuItem,
    InputLabel,
    Input,
    Card,
    FormControl
} from '@mui/material'

export default function Auction() {
  const [ open, setOpen ] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [ searchCondidtion, setSearchCondition ] = useState([{
    condition: '이름',
    value: ''
  }]);


  const options = [
    '이름',
    '방어',
    '보호',
    '최소공격력',
    '최대데미지',
    '마법공격력',
    '에르그레벨'
  ];

  const SearchConditionBox = (searchCondidtion: any, number: number) => {
    const [selectedOption, setSelectedOption] = useState(searchCondidtion.condition);
    const [ age, setAge ] = useState<number>();
    const handleChange = (event: any) => {
        setAge(event.target.value as number);
    };
    return (
        <FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
        </FormControl>
    )
  }

  const SearchBox = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <h1>세부검색</h1>
            <Button onClick={handleClose}>X</Button>
          </Box>
          <Box>
            <SearchConditionBox></SearchConditionBox>
          </Box>
          <button>검색</button>
        </Box>
      </Modal>)
  };

  return (
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
    }}>
      <Card className={styles.Search}
      sx={{
        bgcolor: 'black',
        padding: "20px",
        marginTop: "20px",
        width: "700px"
      }}>
        <Input type="text" placeholder="검색어를 입력하세요"
        sx={{
            color: 'white',
            
        }}></Input>
        <Button>검색</Button>
        <Button onClick={handleOpen}>세부검색</Button>
      </Card>
      <SearchBox />
    </Box>
  )
}