import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ product, admin = 1 }) => {
  return (
    <Box>
      <Card sx={{ width: 255, maxHeight: 350 }}>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJgAmAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAYHBf/EADsQAAEEAQIFAgIHBgUFAAAAAAEAAgMRIQQSBRMiMUEGUSNhMkJSgZGhwQcUY3Gx8DNTcpLRFSQ1YuH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQQFAgP/xAAgEQEAAgICAwEBAQAAAAAAAAAAAQIDEQQSITFBIlET/9oADAMBAAIRAxEAPwD2x72vYWtNkquEGMlzxQQIjGQ9xFBSTzsAEUfKCJQZTuYLFUnY9rWBpORikofyOl2Td4UGMudzAazaCI2OY8OcKA8ppviAbM0c0pMgl6GiifKho5Nk5J7UgmJwibT8FVljt4dWLu0xaZSXDF4ym5v1KN1VoCRzZG7WGyoh+HfM6bUNYYjvcbA8KXfG+jivdAsjXSPJYLBHdWF7SzaD1VVJQ8RdDgT5sKOUQd9/OkERNMb9z8Ck0w5hBZ1Ugu53Q0EebKGnkYdkn2QNG5rGhrjRVTGODw4jAN2mMZlO9poJuaHdFG+yAlIkbTMm0QkRtIf0knyo28k7nZFVhDgZqc3Fe6BZGOe8uaLB8qFYJBGNjhZHlCBWyGU7HVR9lLxyept2cZTSNY1hLQAfFJIiXOPMvHugljRMNz+/bCgyFp2CqGFEpLHUw0K8K1rWloJrdWSgR0YiG9t2PdDTzr3ePZLE5zngOJLfmnl6a5eD5pArnmA7Wdvmknk0+mhOo1ErYmDJc91BYOM8Z0/CdGJJ2mSZxqKK8uP6ALgNdr9XxPUc3VybqPSwfQZ8gF4Zc0Y/H1Yw8e2Tz6h12s9Y6UWzTwST/wDt9Bv55/JY2esNQ13ToYtvtvK5yONXCJU7cjJP1frxcUfHU6b1Zo5nga2GWAn6zac3/lfe02sj1UYdBIySJ2A5pv8Asrzh0KbS6rU8Om52leWuHdv1XD5jyvTHypif08snDrrdHpbmiFu9lk9soYBOLf49l83gXF4uLRnO2Vn+JETdH3HyX0pjsI2Gr70r1bRaNwzrVms6lDpDEdjaoe6YxBo3i7GQpjDSy3UT81WHP3066tShLXGfpfgd8KXHk0G+c5UzUxnRg34RF1gmTJ+aAbG2Ub3XZ9kJJHPa8hpIHsEIBkbmODnCgO6eQ81oDMkd0c0SdG0i/KgDk5JsnwgmJwibtkwbtI6NxeXAdJNpi3nHcDXhHM2/DrIxaBnvbIwtYbJWTV6qPhmkm1WrO2Njbx3J9h81oEZi6ybrwuC9ccWOu4g3QxH4OmPWPDn/APwY+8rzy5OldvXDj/0tp8bXa6fimufq9Qep/Zo7NHgBNCxUwt7LdC1ZVp3O5bNaxEahZEwLQ2NETVe1uFw6UujVEkeFu22q3swiXz4NRLoNUzU6d1PYexOHDyCvROEa6DV6Nupjd0P8Hu0juCvP541u9La86TiP7rI+odQaF/Vf4/Ht+Ct8bL1nrPqVPlYe9e0e4dzIx0ji5gsFWOka5pa05IoJRJygGVdeUCItIeT2zS0WUiJpidufgdkSjmkGPIGCpLud0jHlAPI6Tm8oGY9sbQ1xohSkMRlO8Gr8IQS6NsY3i7HuUrDzjTyDWcJYy7eNwdXm083YbKu80gh7jCdrO3fKYRNc3cQbOe6Iq29fe/Krdu5lNur+5Bk4txL9x4bqNS+vhsJaPd3gfiQvK2F0jy97tz3Elx9z7rtf2jasM0+k0bK+I8yu/kMD8z+S4uIUs/lW3bX8afDpqnb+tcAW2ILJCtsSqyutUQV7OypjWgdlwmAlc2wmQeyJYp2L5+oaQbaacMg+y+rKF8/UC7XUS5l3/BNS3ifDIdU7/EcKfX2hgrWJXOdsNbThcn6H1Lv+60e44IlaB+B/Rdi7bsNVupa+K3akSxM1Ol5gj2iBu5nftlDBzhb+4xhRDd3J2+aJrDgGe2aXo8kOkdE4sb2CFbHt2DfV+bQgh8jZGljTkpIwYiXPwD2U8rldd3XhF87pOKygh7TMdzMiq9k7ZGtbtPcYqku7kdHfzaOUHdd980g839cSl/HjGTYiia2vbuf1C+REtnqpxd6l4iT/AJja+XQ1Y41lZZ3eW1hjWOGyFbYvCwxFbIivGXs2xnKvHZZoitDey5TCUIQoSqlWDUDuvoSrDP5XUIW+k5+R6ihF4ka5n5X+i78Rua7fXTdrzbgzq4/oK788D8cfqvS+bu+HXfFrS4k/jTK5kfuJTIRM3bH3vyhhENh9An2UbeQNwN+EFvPz2rCtKZXxukcXtFgoTc3ldG0mvKlAjZHSODHEEHumkHKAdH5wfKaTaWHZt3eKSRYJL/utBMbRM3c/JusYSukLXbR9EGuymWy8bO3y91YCNg3EbkHlXq1hi9T68Gqc5rh/LY3/AIWGIr7P7QIXRcbilIxNAM/MEg/kQvhQuWVmjV5bWC28cN0a1xFYoitcRXjL2bYytTDYWGMrSx3ZQmF6FAcEF2FCVcqwak4K2SOWDUuwVMIlHBOr1DoG/wAXd+AJ/RenGNrW7wMjNrzz0ZCJ/UTXmtsMTnn5HA/Vd+A/mAuvb5WnxY/G2TzJ3k0mN3OO12R3Q8mI0w0DnKabLPh5d8kRYB5lX4tWVRLY2yND3ZJ9kKuTcXnYHbfFdkIBsbozvdVBM886ms8ZNoEvM6Kq/KC3k9QyThAMcIRtf374SujLnbwOkm+6YNE/UcVikc0tOyu2LQct+0TSfvXCI9VGLfpX7nf6Dg/nS8/hevZdTpI5NPJHKN8b2lrmnyDheP8AFdBLwjiUujlshuY3fbZ4P9+VS5NPPZocPJ46yvietcT18qKRa4pQqel99SN60McvnRyLQyQe65S3ByC7CzCT5qHTCu6hOzSyYK+dqZMFWT6jxeFm0eml4rxCPRwXvkOT9lvk/cuqxMzpzNorG5df6D0DhoJtaRmd+1t+Wt8/jf4LqzI1w2C7OFTA2PQwR6aFlRxNDWj5K4xbOu725pa+OvWsQw8l+9psVjTCdz+3bCHgzG2dh7qQ7n9Jx5Q53INDN5XbhLZBENju49kKBEJRvJq/AUoJexrGlzRRCSMmUlrzYCiNrg8FwIHm08vUBsIu/CBZHGJ22PAq07WNc3cRk5u1EJDW0+gb7FI4P37huq/yQDHukcGONg+F8f1dwCLjOia1lR6qO+U8/mD8ivuSOa5hawgu9gliBaTvFe1qLRExqU1tNZ3DxCdsuknfBqY3RTMNOY4UQU8c4XqHqj03pePM3f4epaKj1DBZHyPuF5ZxrhXEuBSlnEIC1l02Zlujf/J1fkcqhkwTWfDUxcmt41Pttj1IpXt1Q91zrdWB9ZONaB9ZeHSXv3h0P74PdVyazHcLn3a8faWvhGi4jxuflcO0zpPtSGxGz/U7x/VTGOZ9ItlrHmW1ssmpmZDAx0ksh2tY0WSV6P6a4H/0PS75SDrJhcru4aPDR/eVHpv0vpuCQCTcNTrnCnykfRHsz2H9V0EPQDzMWcWruHB08z7Z2fkd/wAx6DGNkYHOFk9ykEji7YT03RRIHF5LAdp8hWuc3YQCN1firKqWUCJtx4NojAlBL8kJIgWu+JgV5UzAuILBeM0gh8jo3lrXUB4QrI3NawB5AcO4KlArpBKNgBs+6hvwcvqjjCDEIxvBJI7WgO5xpwqs4QQ5vPO5vbtlNzWsGw3jCgu5J2gX5yp5Yd8Qk2coFbGYjvdVD2UuPOw3x7qBIZehwoHyFJHIy3N+6Aa9sDdj8nvhVy6ZszXCZjHxPHUxwsEfMFWNZzhuOD8lHNN7KHtaDk+J+gOBcRkJ0rZtFIf8gjb/ALTdfdS+TJ+y6Bh/8vNR/gAn+q9ELOUN7SSVDfj/AEsV7LicdZ+PSMt4+uQ4V+zrg2lAfOJNa/8Ajmm/7R+pK6yBmngiGn00LImAbWsjaGtH3DsmLzESwCwM5TcsDrvNXSmKxHpzNpt7KxhhO5+QMYUuHPNs8YyoDzMdpFDvhS48j6Ob9105SJGxDYbJCQROa7mGiBlOGc0bySCUolLiGEDOLQS5wnbtZ375Q13JFP8AOcIc3kjc3PjKGjn9TsV7IIMZlO9tUfdCkymI7AAQPKECse57w1xsHunlAjALMEoQgIgJW7pMm6SOe4PLQekGgFCEFsjGxsLmCiPKWE80nmZrshCCJXGJ21hoKzlt27qzV2hCCqJzpHBrzYTTfCrl4tCEDRtEjdzxZOFXvcX7b6bqvkhCB5GiNtsFHsohHNB5ma7KUIEke6N5aw0ArHsa1pc0UQLBUoQVxEynbJkVaJiYiBHgHupQgaNjXsDnCyVKEIP/2Q=="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        {admin === 0 && (
          <CardActions>
            <Button variant="contained" color="error" size="small">
              Delete
            </Button>
            <Button variant="contained" color="primary" size="small">
              Edit
            </Button>
          </CardActions>
        )}
      </Card>
    </Box>
  );
};

export default ProductCard;
