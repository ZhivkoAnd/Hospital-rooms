import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Link } from "react-router-dom";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteData } from "../../utils/API";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell: any = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TransitionsModal({ id, patients }: any) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteMutate, isLoading: isLoadingDeletedElement } =
    useMutation(deleteData, {
      onSuccess: () => {
        queryClient.invalidateQueries(["rooms"]);
      },
    });

  const remove = async (roomId: any, patientId: any) => {
    await deleteMutate({ roomId, patientId });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="room__info-edit" onClick={handleOpen}>
        Edit
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <div className="current-room-number">Room number: {id}</div>
              {patients?.map((e: any) => (
                <>
                  <div>{e.name}</div>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="info"
                      startIcon={<UpgradeIcon />}
                      component={Link}
                      to={`/update-product/${e.id}`}
                    >
                      Update
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => remove(id, e.id)}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </>
              ))}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
