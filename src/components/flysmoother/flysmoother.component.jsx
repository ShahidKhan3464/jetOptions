'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Formik } from 'formik';
// import 'swiper/swiper-bundle.min.css';
import { Icons } from '../../common/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFlysmoother from './use-flysmoother.hook';
import { Navigation, Pagination } from 'swiper/modules';
import CustomButton from '../../common/components/button';
import TextField from '../../common/components/textField';
import CustomDialog from '../../common/components/dialog';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
  Typography,
  TableContainer,
  IconButton
} from '@mui/material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  StyledTableCell
} from './flysmoother.style';

const SectionTitle = ({ children }) => (
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Poppins',
      '@media screen and (max-width: 520px)': {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '18px'
      }
    }}
  >
    {children}
  </Typography>
);

export default function Flysmoother() {
  const {
    rows,
    options,
    policies,
    expanded,
    isMobile,
    dialogOpen,
    handleChange,
    setDialogOpen,
    initialValues,
    itineraryExpanded,
    setItineraryExpanded
  } = useFlysmoother();

  const content1 = () => (
    <Box
      sx={{
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '3px',
          height: '3px'
        }
      }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#000000',
          lineHeight: '24px',
          fontFamily: 'Poppins'
        }}
      >
        Your trip will not be confirmed until contract is signed and payment is
        received.
        <br />
        <br />
        Cancellation Terms:
        <br />
        <br />
      </Typography>

      {policies.map((policy, index) => (
        <Box key={policy.title} className="policy">
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '20px',
              color: '#000000',
              lineHeight: '30px',
              fontFamily: 'Poppins'
            }}
          >
            {index + 1}.{policy.title}:
          </Typography>
          <ul style={{ padding: '10px 40px' }}>
            {policy.details.map((detail) => (
              <li
                key={detail}
                style={{
                  fontWeight: 400,
                  fontSize: '20px',
                  color: '#000000CC',
                  lineHeight: '30px',
                  fontFamily: 'Poppins'
                }}
              >
                {detail}
              </li>
            ))}
          </ul>
        </Box>
      ))}
      <br />
      <CustomButton
        loading={false}
        disabled={false}
        text="Request Contract"
        sxProps={{
          width: '100%',
          height: '39px',
          fontWeight: 400,
          fontSize: '20px',
          background: '#121826'
        }}
      />
      <Typography
        sx={{
          mt: 1,
          fontWeight: 400,
          fontSize: '16px',
          color: '#000000',
          lineHeight: '24px',
          fontFamily: 'Poppins'
        }}
      >
        [Brokerage Name] is an Air Charter Broker and not a direct air carrier
        or direct foreign air carrier. All air service shall be provided by a
        properly licensed direct air carrier or direct foreign air carrier.
      </Typography>
    </Box>
  );

  const content2 = () => (
    <Box
      sx={{
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '3px',
          height: '3px'
        }
      }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#000000',
          lineHeight: '24px',
          fontFamily: 'Poppins'
        }}
      >
        By requesting to book, you are approving [Brokerage Name] to book this
        trip according to the following cancellation terms:
        <br />
        <br />
      </Typography>

      {policies.map((policy, index) => (
        <Box key={policy.title} className="policy">
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '20px',
              color: '#000000',
              lineHeight: '30px',
              fontFamily: 'Poppins'
            }}
          >
            {index + 1}.{policy.title}:
          </Typography>
          <ul style={{ padding: '10px 40px' }}>
            {policy.details.map((detail) => (
              <li
                key={detail}
                style={{
                  fontWeight: 400,
                  fontSize: '20px',
                  color: '#000000CC',
                  lineHeight: '30px',
                  fontFamily: 'Poppins'
                }}
              >
                {detail}
              </li>
            ))}
          </ul>
        </Box>
      ))}
      <br />

      <Typography
        sx={{
          mb: 2,
          fontWeight: 400,
          fontSize: '20px',
          color: '#000000',
          lineHeight: '30px',
          fontFamily: 'Poppins'
        }}
      >
        This approval is binding based on your Aircraft Charter Service
        Agreement with [Brokerage Name].
      </Typography>

      <Typography
        sx={{
          mb: 1,
          fontWeight: 500,
          fontSize: '20px',
          color: '#000000',
          lineHeight: '30px',
          fontFamily: 'Poppins'
        }}
      >
        Please type &quot;APPROVE&quot; to get this trip formally booked:
      </Typography>

      <input
        type="text"
        placeholder="Type ‘Approve’ here"
        style={{
          width: '100%',
          padding: '6px',
          outline: 'none',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          borderRadius: '4px',
          marginBottom: '10px',
          fontFamily: 'Poppins',
          border: '1px solid #00000033'
        }}
      />

      <CustomButton
        loading={false}
        disabled={false}
        text="Confirm and Proceed"
        sxProps={{
          width: '100%',
          height: '39px',
          fontWeight: 400,
          fontSize: '20px',
          background: '#121826'
        }}
      />
      <Typography
        sx={{
          mt: 1,
          fontWeight: 400,
          fontSize: '16px',
          color: '#000000',
          lineHeight: '24px',
          fontFamily: 'Poppins'
        }}
      >
        Please note, availability is subject to change and this trip will not be
        formally confirmed until payment is received.
        <br />
        <br />
        [Brokerage Name] is an Air Charter Broker and not a direct air carrier
        or direct foreign air carrier. All air service shall be provided by a
        properly licensed direct air carrier or direct foreign air carrier.
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ px: 1.5 }}>
      {dialogOpen && (
        <CustomDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          title={'Request to Book : Gulfstream G650'}
        >
          {content1()}
        </CustomDialog>
      )}

      <Box
        sx={{
          pt: 8.5,
          width: '100%',
          margin: 'auto',
          maxWidth: '395px',
          img: { width: '100%', height: '100%' },
          '@media screen and (max-width: 520px)': { pt: 3, maxWidth: '218px' }
        }}
      >
        <Image src={Icons.flysmootheLogo} alt="fly-smoother" />
      </Box>
      <Box
        sx={{
          p: '16px 24px',
          maxWidth: '947px',
          margin: '24px auto',
          borderRadius: '8px',
          border: '1px solid #DD524C',
          boxShadow: '10px 10px 50px 0px #DD524C1A',
          '@media screen and (max-width: 520px)': {
            p: '6px',
            margin: 'auto',
            border: 'none',
            boxShadow: 'none'
          }
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '20px',
            color: '#000000',
            lineHeight: '30px',
            fontFamily: 'Poppins',
            '@media screen and (max-width: 520px)': {
              fontSize: '14px',
              lineHeight: '21px'
            }
          }}
        >
          Private Jet Charter Proposal
        </Typography>
        <Box
          sx={{
            p: 1,
            m: '10px 0',
            display: 'flex',
            borderRadius: '4px',
            alignItems: 'center',
            background: '#F8F9FA80',
            border: '1px solid #00000033',
            '@media screen and (max-width: 520px)': {
              p: 0.5,
              m: '5px 0 20px 0'
            }
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              color: '#000000B2',
              lineHeight: '24px',
              fontFamily: 'Poppins',
              '@media screen and (max-width: 520px)': {
                fontSize: '12px',
                lineHeight: '18px'
              }
            }}
          >
            Client
          </Typography>
          <Box
            sx={{
              mr: 1,
              ml: 2,
              width: '1px',
              height: '30px',
              background: '#0000001A',
              '@media screen and (max-width: 520px)': {
                height: '20px'
              }
            }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              color: '#000000',
              lineHeight: '24px',
              fontFamily: 'Poppins',
              '@media screen and (max-width: 520px)': {
                fontSize: '12px',
                lineHeight: '18px'
              }
            }}
          >
            John Doe
          </Typography>
        </Box>

        <Box>
          {options.map((option) => (
            <Accordion
              key={option.id}
              expanded={expanded === option.id}
              onChange={handleChange(option.id)}
            >
              <AccordionSummary
                id={`${option.id}-header`}
                expanded={expanded === option.id}
                aria-controls={`${option.id}-content`}
              >
                <SectionTitle>{option.title}</SectionTitle>
                {expanded !== option.id && (
                  <SectionTitle>Price {option.price}</SectionTitle>
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(data) => console.log(data)}
                >
                  {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                      <Box
                        sx={{
                          gap: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          '@media screen and (max-width: 1024px)': {
                            flexDirection: 'column-reverse'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: '100%',
                            maxWidth: '50%',
                            input: {
                              fontSize: '20px !important',
                              lineHeight: '30px !important',
                              padding: '5px 10px !important'
                            },

                            '@media screen and (max-width: 1024px)': {
                              marginTop: 4,
                              maxWidth: 'inherit'
                            }
                          }}
                        >
                          <TextField
                            type="text"
                            formik={formik}
                            name="charterPrice"
                            icon={Icons.charter}
                            label="Charter Price"
                            placeholder="Enter here"
                            value={formik.values.charterPrice}
                          />
                          <TextField
                            type="text"
                            formik={formik}
                            name="totalPrice"
                            placeholder="Enter here"
                            value={formik.values.totalPrice}
                            label="Total Price (Tax Included)"
                          />
                          <TextField
                            type="text"
                            formik={formik}
                            name="yearOfManfacturer"
                            placeholder="Enter here"
                            value={formik.values.yearOfManfacturer}
                            label="Year of Manufacturer / Year of Refurbishment"
                          />
                        </Box>
                        <Box
                          sx={{
                            width: '100%',
                            maxWidth: '50%',
                            position: 'relative',
                            '@media screen and (max-width: 1024px)': {
                              maxWidth: 'inherit'
                            }
                          }}
                        >
                          <Typography
                            sx={{
                              mb: 1,
                              fontWeight: 700,
                              fontSize: '16px',
                              color: '#000000',
                              lineHeight: '24px',
                              textAlign: 'center',
                              fontFamily: 'Poppins',
                              '@media screen and (max-width: 1024px)': {
                                mb: 0,
                                fontWeight: 500,
                                fontSize: '12px',
                                lineHeight: '18px'
                              }
                            }}
                          >
                            Photos*
                          </Typography>
                          <Swiper
                            slidesPerView={1}
                            navigation={true}
                            pagination={true}
                            modules={[Pagination, Navigation]}
                          >
                            {option.photos.map((photo, index) => (
                              <SwiperSlide key={index}>
                                <Image
                                  src={photo}
                                  alt={`slider-photo-${index}`}
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mt: 4,
                          '@media screen and (max-width: 520px)': { mt: 0 }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconButton
                            onClick={() =>
                              setItineraryExpanded(!itineraryExpanded)
                            }
                          >
                            <ArrowRightIcon
                              sx={{
                                fontSize: '30px',
                                color: '#000000',
                                ...(itineraryExpanded && {
                                  transform: 'rotate(90deg)'
                                })
                              }}
                            />
                          </IconButton>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '20px',
                              lineHeight: '30px',
                              fontFamily: 'Poppins',
                              '@media screen and (max-width: 520px)': {
                                fontSize: '14px',
                                fontWeight: 600,
                                lineHeight: '21px'
                              }
                            }}
                          >
                            Itinerary
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            overflow: 'hidden',
                            transition: 'all .2s ease',
                            paddingTop: itineraryExpanded ? '20px' : 0,
                            transitionProperty: 'max-height, padding-top',
                            maxHeight: itineraryExpanded ? 'fit-content' : 0
                          }}
                        >
                          {!isMobile ? (
                            <TableContainer
                              component={Paper}
                              sx={{
                                boxShadow: 'none',
                                background: 'transparent'
                              }}
                            >
                              <Table aria-label="caption table">
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell
                                      sx={{
                                        '@media screen and (max-width: 520px)':
                                          {
                                            pt: '50px !important'
                                          }
                                      }}
                                    >
                                      Depart
                                    </StyledTableCell>
                                    <StyledTableCell
                                      sx={{
                                        '@media screen and (max-width: 520px)':
                                          {
                                            pb: '50px !important'
                                          }
                                      }}
                                    >
                                      Flight Time
                                    </StyledTableCell>
                                    <StyledTableCell
                                      sx={{
                                        '@media screen and (max-width: 520px)':
                                          {
                                            pt: '50px !important'
                                          }
                                      }}
                                    >
                                      Arrive
                                    </StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row, index) => (
                                    <TableRow key={index}>
                                      <StyledTableCell>
                                        <Box
                                          sx={{
                                            gap: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                          }}
                                        >
                                          <Image
                                            alt="departure"
                                            src={Icons.departure}
                                          />
                                          <Box>
                                            <Typography
                                              sx={{
                                                color: '#000000',
                                                fontSize: '20px',
                                                fontWeight: '400',
                                                lineHeight: '30px',
                                                fontFamily: 'Poppins',
                                                '@media screen and (max-width: 520px)':
                                                  {
                                                    fontSize: '14px',
                                                    lineHeight: '21px'
                                                  }
                                              }}
                                            >
                                              {row.depart}
                                            </Typography>
                                            <Typography
                                              sx={{
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                lineHeight: '24px',
                                                color: '#000000B2',
                                                fontFamily: 'Poppins',
                                                '@media screen and (max-width: 520px)':
                                                  {
                                                    fontSize: '12px',
                                                    lineHeight: '18px'
                                                  }
                                              }}
                                            >
                                              8/15/2023,{' '}
                                              <strong> 8:00 AM </strong>
                                            </Typography>
                                          </Box>
                                        </Box>
                                      </StyledTableCell>
                                      <StyledTableCell
                                        sx={{
                                          '@media screen and (max-width: 520px)':
                                            {
                                              pb: '50px !important'
                                            }
                                        }}
                                      >
                                        {row.flightTime}
                                      </StyledTableCell>
                                      <StyledTableCell>
                                        <Box
                                          sx={{
                                            gap: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                          }}
                                        >
                                          <Image
                                            alt="landing"
                                            src={Icons.landing}
                                          />
                                          <Box>
                                            <Typography
                                              sx={{
                                                color: '#000000',
                                                fontSize: '20px',
                                                fontWeight: '400',
                                                lineHeight: '30px',
                                                fontFamily: 'Poppins',
                                                '@media screen and (max-width: 520px)':
                                                  { fontSize: '16px' }
                                              }}
                                            >
                                              {row.arrive}
                                            </Typography>
                                            <Typography
                                              sx={{
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                lineHeight: '24px',
                                                color: '#000000B2',
                                                fontFamily: 'Poppins',
                                                '@media screen and (max-width: 520px)':
                                                  { fontSize: '14px' }
                                              }}
                                            >
                                              8/15/2023,{' '}
                                              <strong> 8:00 AM </strong>
                                            </Typography>
                                          </Box>
                                        </Box>
                                      </StyledTableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          ) : (
                            <>
                              {rows.map((row, index) => (
                                <Box
                                  key={index}
                                  sx={{
                                    py: 1,
                                    display: 'grid',
                                    borderBottom: '1px solid #0000001A',
                                    gridTemplateColumns: 'auto auto auto'
                                  }}
                                >
                                  <Box sx={{ pt: 3 }}>
                                    <Typography
                                      sx={{
                                        mb: 1,
                                        color: '#000000',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '21px',
                                        textAlign: 'center',
                                        fontFamily: 'Poppins'
                                      }}
                                    >
                                      Depart
                                    </Typography>

                                    <Box
                                      sx={{
                                        gap: 1.5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      }}
                                    >
                                      <Image
                                        alt="departure"
                                        src={Icons.departure}
                                      />
                                      <Box>
                                        <Typography
                                          sx={{
                                            color: '#000000',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            lineHeight: '21px',
                                            fontFamily: 'Poppins'
                                          }}
                                        >
                                          {row.depart}
                                        </Typography>
                                        <Typography
                                          sx={{
                                            fontSize: '12px',
                                            fontWeight: '400',
                                            lineHeight: '18px',
                                            color: '#000000B2',
                                            fontFamily: 'Poppins'
                                          }}
                                        >
                                          8/15/2023, <strong> 8:00 AM </strong>
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Box>

                                  <Box>
                                    <Typography
                                      sx={{
                                        mb: 1,
                                        color: '#000000',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '21px',
                                        textAlign: 'center',
                                        fontFamily: 'Poppins'
                                      }}
                                    >
                                      Flight Time
                                    </Typography>

                                    <Typography
                                      sx={{
                                        mb: 1,
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#000000B2',
                                        lineHeight: '21px',
                                        textAlign: 'center',
                                        fontFamily: 'Poppins'
                                      }}
                                    >
                                      {row.flightTime}
                                    </Typography>
                                  </Box>

                                  <Box sx={{ pt: 3 }}>
                                    <Typography
                                      sx={{
                                        mb: 1,
                                        color: '#000000',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '21px',
                                        textAlign: 'center',
                                        fontFamily: 'Poppins'
                                      }}
                                    >
                                      Arrive
                                    </Typography>

                                    <Box
                                      sx={{
                                        gap: 1.5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      }}
                                    >
                                      <Image
                                        alt="landing"
                                        src={Icons.landing}
                                      />
                                      <Box>
                                        <Typography
                                          sx={{
                                            color: '#000000',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            lineHeight: '21px',
                                            fontFamily: 'Poppins'
                                          }}
                                        >
                                          {row.arrive}
                                        </Typography>
                                        <Typography
                                          sx={{
                                            fontSize: '12px',
                                            fontWeight: '400',
                                            lineHeight: '18px',
                                            color: '#000000B2',
                                            fontFamily: 'Poppins'
                                          }}
                                        >
                                          8/15/2023, <strong> 8:00 AM </strong>
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              ))}
                            </>
                          )}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mt: 3,
                          '& >button': { width: '100% !important' }
                        }}
                      >
                        <CustomButton
                          loading={false}
                          disabled={false}
                          text="Request to Book"
                          clicked={() => setDialogOpen(true)}
                          sxProps={{
                            height: '44px',
                            fontWeight: 500,
                            fontSize: '20px',
                            background: '#000000'
                          }}
                        />
                      </Box>
                    </form>
                  )}
                </Formik>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '12px',
            color: '#000000',
            lineHeight: '18px',
            fontFamily: 'Poppins'
          }}
        >
          [Brokerage Name] is an Air Charter Broker and not a direct air carrier
          or direct foreign air carrier. All air service shall be provided by a
          properly licensed direct air carrier or direct foreign air carrier.
          <br />
          <br />
          *Photos are from similar model and vintage. Your exact plane may
          differ from the one in pictures.
        </Typography>
      </Box>
    </Box>
  );
}
